// import React, { useEffect } from "react";
// import { Map, TileLayer, Polyline } from "react-leaflet";

// const FlightPathMap = () => {
//   useEffect(() => {
//     // Define the starting and ending coordinates for your flight path
//     const startPoint = [51.5072, 0.1276];
//     const endPoint = [23.8041, 90.4152];

//     // Create an array of coordinates to represent the flight path
//     const flightPathCoordinates = [startPoint, endPoint];

//     // Define the map options
//     const mapOptions = {
//       center: [37.7749, -122.4194],
//       zoom: 7,
//     };

//     // Create a Leaflet map instance
//     const map = new Map({
//       el: "flight-path-map",
//       center: mapOptions.center,
//       zoom: mapOptions.zoom,
//     });

//     // Add a tile layer for the world map
//     const tileLayer = new TileLayer({
//       url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//       maxZoom: 19,
//     });
//     tileLayer.addTo(map);

//     // Create a polyline to represent the flight path
//     const flightPath = new Polyline({
//       points: flightPathCoordinates,
//       color: "blue",
//     });
//     flightPath.addTo(map);

//     // Fit the map to the flight path bounds
//     map.fitBounds(flightPath.getBounds());
//   }, []);

//   return (
//     <div id="flight-path-map" style={{ width: "100%", height: "600px" }}>
//       {/* The map will be rendered here */}
//     </div>
//   );
// };

// export default FlightPathMap;
