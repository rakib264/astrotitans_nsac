import React, { useState } from "react";
import * as THREE from "three";

import { MapGL, Marker } from "react-map-gl";

const Astronauts3DEarth = () => {
  const [images, setImages] = useState([]);

  const globe = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(600, 128, 128);
    const material = new THREE.MeshBasicMaterial({ color: "lightblue" });
    const globeMesh = new THREE.Mesh(geometry, material);

    scene.add(globeMesh);

    return (
      <div>
        <canvas id="canvas" />
      </div>
    );
  };

  const markers = () => {
    return (
      <MapGL
        style="width: 100%; height: 500px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        center={[0, 0]}
        zoom={1}
      >
        {images.map((image, index) => (
          <Marker key={index} position={image.position}>
            <img src={image.src} />
          </Marker>
        ))}
      </MapGL>
    );
  };

  return (
    <div>
      {globe()}
      {markers()}
    </div>
  );
};

export default Astronauts3DEarth;
