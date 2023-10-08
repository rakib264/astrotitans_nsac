import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";

function EarthGlobe() {
  const mapRef = useRef(null);
  const searchRef = useRef(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    // Load the required ArcGIS modules
    loadModules(
      [
        "esri/Map",
        "esri/views/SceneView",
        "esri/widgets/Search",
        "esri/layers/GraphicsLayer",
      ],
      { css: true }
    )
      .then(([Map, SceneView, Search, GraphicsLayer]) => {
        // Create a map
        const map = new Map({
          basemap: "streets",
          ground: "world-elevation",
        });

        // Create a 3D scene view
        const mapView = new SceneView({
          container: mapRef.current,
          map: map,
          camera: {
            position: {
              x: -120,
              y: 35,
              z: 5000000,
            },
            tilt: 0,
            heading: 0,
          },
        });

        // Create a GraphicsLayer for asteroids
        const asteroidsLayer = new GraphicsLayer();
        map.add(asteroidsLayer);

        // Create a Search widget
        const searchWidget = new Search({
          view: mapView,
          container: searchRef.current,
        });

        // Listen for the search select event
        searchWidget.on("select-result", (event) => {
          // Clear any existing graphics
          mapView.graphics.removeAll();

          // Add a marker graphic at the selected location
          const selectedLocation = event.result.feature;
          selectedLocation.symbol = {
            type: "simple-marker",
            color: [226, 119, 40],
            size: 10,
          };
          mapView.graphics.add(selectedLocation);
        });

        // Fetch asteroid data from NeoWs API and display them as graphics
        fetchAsteroids(asteroidsLayer);

        setView(mapView);
      })
      .catch((error) => {
        console.error("Error loading ArcGIS modules:", error);
      });
  }, []);

  const fetchAsteroids = async (layer) => {
    // Fetch asteroid data from the NeoWs API (replace 'YOUR_API_KEY' with your API key)
    const apiKey = "YOUR_API_KEY";
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`
    );
    const data = await response.json();

    // Define symbol properties for different asteroid categories
    const mostDangerousSymbol = {
      type: "simple-marker",
      size: 20,
      color: [255, 0, 0], // Red
      outline: {
        color: [0, 0, 0],
        width: 0.5,
      },
    };

    const lessDangerousSymbol = {
      type: "simple-marker",
      size: 10,
      color: [0, 128, 0], // Green
      outline: {
        color: [0, 0, 0],
        width: 0.5,
      },
    };

    // Plot asteroids as graphics on the map with appropriate symbols
    data?.near_earth_objects?.forEach((asteroid) => {
      // Loop through each close approach data for the asteroid
      asteroid.close_approach_data.forEach((approachData) => {
        const longitude =
          parseFloat(approachData?.miss_distance.kilometers) * 0.009;
        const latitude = Math.random() * 20 - 10; // Random latitude within a range

        let symbol;

        // Determine the category of the asteroid based on proximity to Earth
        const isPotentiallyHazardous =
          asteroid.is_potentially_hazardous_asteroid;

        if (isPotentiallyHazardous) {
          // Most dangerous
          symbol = mostDangerousSymbol;
        } else {
          // Less dangerous
          symbol = lessDangerousSymbol;
        }

        const graphic = {
          geometry: {
            type: "point",
            longitude: longitude,
            latitude: latitude,
          },
          symbol: symbol,
          attributes: {
            name: asteroid.name,
            diameter:
              asteroid.estimated_diameter.kilometers.estimated_diameter_max,
            isPotentiallyHazardous: asteroid.is_potentially_hazardous_asteroid,
            orbitingBody: approachData.orbiting_body,
            relativeVelocity:
              approachData.relative_velocity.kilometers_per_second,
          },
          popupTemplate: {
            title: "{name}",
            content: `
              <b>Diameter:</b> {diameter} kilometers<br>
              <b>Is Potentially Hazardous:</b> {isPotentiallyHazardous}<br>
              <b>Orbiting Body:</b> {orbitingBody}<br>
              <b>Relative Velocity:</b> {relativeVelocity} kilometers per second
            `,
          },
        };
        layer.add(graphic);
      });
    });
  };

  return (
    <div>
      <div
        ref={searchRef}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: "1000",
        }}
      />
      <div ref={mapRef} style={{ height: "100vh", width: "100%" }} />
    </div>
  );
}

export default EarthGlobe;
