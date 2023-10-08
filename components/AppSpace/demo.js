import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";

function WeatherMap() {
  const mapRef = useRef(null);
  const searchRef = useRef(null);
  const [view, setView] = useState(null);

  useEffect(() => {
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
        const map = new Map({
          basemap: "streets",
          ground: "world-elevation",
        });

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

        const weatherLayer = new GraphicsLayer();
        map.add(weatherLayer);

        const searchWidget = new Search({
          view: mapView,
          container: searchRef.current,
          includeDefaultSources: false, // Disable default search sources
          sources: [
            {
              locator: new window["__esri"].tasks.Locator({
                url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
              }),
              singleLineFieldName: "SingleLine",
              name: "Custom Geocoding",
              outFields: ["Addr_type"],
              placeholder: "Search for a location...",
            },
          ],
        });

        searchWidget.on("select-result", (event) => {
          // Clear existing weather graphics
          weatherLayer.removeAll();

          const selectedLocation = event.result.feature;
          const { latitude, longitude } = selectedLocation.geometry;

          // Fetch weather data for the selected location (replace with your weather API)
          const apiKey = "YOUR_WEATHER_API_KEY";
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          )
            .then((response) => response.json())
            .then((data) => {
              // Extract weather conditions (example, customize as per your API)
              const temperature = data.main.temp - 273.15; // Convert to Celsius
              const airQuality = data.main.co2Level; // Example: air quality data
              const windSpeed = data.wind.speed;

              // Create a graphic to display weather conditions
              const weatherGraphic = {
                geometry: {
                  type: "point",
                  latitude: latitude,
                  longitude: longitude,
                },
                symbol: {
                  type: "text",
                  text: `Temp: ${temperature.toFixed(
                    2
                  )}°C\nCO2: ${airQuality}\nWind: ${windSpeed} m/s`,
                  font: {
                    size: 12,
                    weight: "bold",
                  },
                  color: "black",
                },
              };

              // Add the weather graphic to the map
              weatherLayer.add(weatherGraphic);
            })
            .catch((error) => {
              console.error("Error fetching weather data:", error);
            });
        });

        setView(mapView);
      })
      .catch((error) => {
        console.error("Error loading ArcGIS modules:", error);
      });
  }, []);

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
      <div ref={mapRef} style={{ height: "90vh", width: "100%" }} />
    </div>
  );
}

export default WeatherMap;
