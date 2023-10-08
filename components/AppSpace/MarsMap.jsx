// import React, { useEffect, useRef, useState } from "react";
// import { loadModules } from "esri-loader";

// const MarsMap = () => {
//   useEffect(() => {
//     loadModules(
//       [
//         "esri/Map",
//         "esri/views/SceneView",
//         "esri/layers/TileLayer",
//         "esri/layers/ElevationLayer",
//       ],
//       {
//         css: true,
//       }
//     )
//       .then(([Map, SceneView, TileLayer, ElevationLayer]) => {
// const marsBasemap = new TileLayer({
//   url: "https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer",
// });

// const marsElevation = new ElevationLayer({
//   url: "https://astro.arcgis.com/arcgis/rest/services/OnMars/MDEM200M/ImageServer",
// });
// const map = new Map({
//   ground: {
//     layers: [marsElevation],
//   },
//   layers: [marsBasemap],
// });

// const view = new SceneView({
//   container: "marsGlobeView",
//   map,
//   scale: 1000000, // Adjust this scale as needed
//   center: [0, 0], // Adjust the initial center coordinates
// });
//       })
//       .catch((error) => {
//         console.error("Error loading ArcGIS modules:", error);
//       });
//   }, []);

//   return <div id="marsGlobeView" style={{ height: "100vh", width: "100vw" }} />;
// };

// export default MarsMap;
"use client";

import Link from "next/link";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import React, { useEffect, useState } from "react";
import { loadModules } from "esri-loader";

const data = {
  photos: [
    {
      id: 424926,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424927,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631190503679E04_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424928,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424929,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631180503678E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424930,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631180305215E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424931,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631170503677E03_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424932,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631170305214E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424933,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631160503676E02_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424934,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631160305213E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424935,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631150503675E02_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424936,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631150305212E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424937,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631140503674E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424938,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631140305211E02_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424939,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631130503673E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424940,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631130305210E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424941,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631120305209E02_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424942,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631120503672E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424943,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631110503671E02_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424944,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631110305208E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424945,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631100503670E02_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424946,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631100305207E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424947,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631090503669E02_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424948,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631090305206E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424949,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631080503668E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
    {
      id: 424950,
      sol: 1000,
      camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
        full_name: "Mast Camera",
      },
      img_src:
        "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631080305205E01_DXXX.jpg",
      earth_date: "2015-05-30",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3936,
        max_date: "2023-09-02",
        total_photos: 676390,
        cameras: [
          {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            name: "NAVCAM",
            full_name: "Navigation Camera",
          },
          {
            name: "MAST",
            full_name: "Mast Camera",
          },
          {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex",
          },
          {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager",
          },
          {
            name: "MARDI",
            full_name: "Mars Descent Imager",
          },
          {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
    },
  ],
};

const MarsMap = () => {
  const [selectedCamera, setSelectedCamera] = useState("curiosity");
  const [imageSrc, setImageSrc] = useState([
    {
      src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631100305207E01_DXXX.jpg",
    },
  ]);

  useEffect(() => {
    loadModules(
      [
        "esri/Map",
        "esri/views/SceneView",
        "esri/layers/TileLayer",
        "esri/layers/ElevationLayer",
        "esri/layers/FeatureLayer",
        "esri/widgets/LayerList",
      ],
      {
        css: true,
      }
    )
      .then(
        ([
          Map,
          SceneView,
          TileLayer,
          ElevationLayer,
          FeatureLayer,
          LayerList,
        ]) => {
          // Your existing code for initializing the map and scene view

          const marsBasemap = new TileLayer({
            url: "https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer",
          });

          const marsElevation = new ElevationLayer({
            url: "https://astro.arcgis.com/arcgis/rest/services/OnMars/MDEM200M/ImageServer",
          });
          const map = new Map({
            ground: {
              layers: [marsElevation],
            },
            layers: [marsBasemap],
          });

          // const view = new SceneView({
          //   container: "marsGlobeView",
          //   map,
          //   scale: 1000000, // Adjust this scale as needed
          //   center: [0, 0], // Adjust the initial center coordinates
          // });

          const view = new SceneView({
            map: map,
            container: "marsGlobeView",
            qualityProfile: "high",
            spatialReference: {
              wkid: 104971,
            },
            camera: {
              position: {
                x: 27.63423,
                y: -6.34466,
                z: 1281525.766,
                spatialReference: 104971,
              },
              heading: 332.28,
              tilt: 37.12,
            },
          });

          // Function to load and display images based on the selected camera

          const loadAndDisplayImage = () => {
            //   const apiUrl =
            //     selectedCamera === "curiosity"
            //       ? "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&page=1&api_key=DEMO_KEY"
            //       : "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=FHAZ&page=1&api_key=DEMO_KEY";

            //   const apiUrl2 =
            //     "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=q5ZiJS8ET48X9mVE1ZBC5Fc0VzAB1JUA0ffsdyvu";

            //   fetch(apiUrl2)
            //     .then((response) => response.json())
            //     .then((data) => {
            //       if (data.photos && data.photos.length > 0) {
            //         // const imageUrl = data.photos[0].img_src;
            //         if (selectedCamera === "curiosity") {
            //           data.photos.forEach((photo) => {
            //             setImageSrc([...imageSrc, photo.img_src]);
            //           });
            //         } else {
            //           data.photos.forEach((photo) => {
            //             setImageMastSrc([...imageMastSrc, photo.img_src]);
            //           });
            //         }
            //       } else {
            //         setImageSrc([]);
            //         setImageMastSrc([]);
            //       }
            //     })
            //     .catch((error) => {
            //       console.error("Error loading images:", error);
            //     });

            if (data.photos && data.photos.length > 0) {
              // const imageUrl = data.photos[0].img_src;
              // if (selectedCamera === "curiosity") {
              //   data.photos.forEach((photo) => {
              //     console.log("photo1", photo.img_src)
              //     setImageSrc([...imageSrc, photo.img_src]);
              //   });
              // } else {
              //   data.photos.forEach((photo) => {
              //     setImageMastSrc([...imageMastSrc, photo.img_src]);
              //   });
              // }

              const newImages = data.photos.map((photo) => ({
                src: photo.img_src,
              }));
              setImageSrc([...imageSrc, ...newImages]);
              console.log("Imge1: ", imageSrc);
            } else {
              setImageSrc([]);
            }
          };

          // Call the function to load the initial image
          loadAndDisplayImage();

          // Handle button clicks to switch cameras
          const curiosityButton = document.getElementById("curiosityButton");
          // const mastCameraButton = document.getElementById("mastCameraButton");

          curiosityButton.addEventListener("click", () => {
            setSelectedCamera("curiosity");
            loadAndDisplayImage();
          });

          // mastCameraButton.addEventListener("click", () => {
          //   setSelectedCamera("mastCamera");
          //   loadAndDisplayImage();
          // });
        }
      )
      .catch((error) => {
        console.error("Error loading ArcGIS modules:", error);
      });
  }, [selectedCamera]);

  return (
    <div>
      <div id="marsGlobeView" style={{ height: "100vh", width: "100vw" }} />
      <div className="flex items-center gap-12 py-12 px-20">
        <button
          id="curiosityButton"
          style={{ marginRight: 10 }}
          className="btn btn-info btn-lg"
        >
          Curiosity Camera
        </button>
        {/* <button id="mastCameraButton" className="btn btn-info btn-lg">
          Mast Camera
        </button> */}
      </div>
      <div className="py-16 px-20 ">
        {/* {imageSrc && <LightBox getItems={imageSrc} />} */}

        {/* <div className="grid grid-cols-4 gap-6">
          {imageSrc &&
            imageSrc.map((item) => (
              <div className="col-span-1">
                <img src={item} className="w-96 h-auto" alt="Mars Rover" />
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default MarsMap;

const LightBox = ({ getItems }) => {
  const [value, setValue] = useState("all controls");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleChange = (e) => setValue(e.target.value);
  const [tabs] = useState("All controls");
  const [tabs1] = useState("All controls");

  console.log("getItems", getItems);

  return (
    <div className="space-y-8 pt-5" x-data="lightbox">
      {/* Lightbox */}
      <div className="panel">
        <h5 className="mb-5 text-lg font-semibold dark:text-white-light">
          Gallery Control
        </h5>
        <div className="mb-5">
          <div className="mb-5 flex">
            <div className="mx-4">
              <input
                type="radio"
                value="all controls"
                onChange={handleChange}
                name="allcontrols"
                className="form-radio mt-1.5"
                checked={value === "all controls"}
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-primary">
                All controls
              </h4>
              <p className="media-text">
                Caption, slideshow, thumbnails and fullscreen buttons, tap to
                toggle controls
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mx-4">
              <input
                type="radio"
                value="minimal"
                onChange={handleChange}
                name="allcontrols"
                className="form-radio mt-1.5"
                checked={value === "minimal"}
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-primary">Minimal</h4>
              <p className="media-text">
                No caption, no slideshow, no thumbnails, no fullscreen, tap to
                close
              </p>
            </div>
          </div>
          {value === "all controls" ? (
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {tabs === "All controls" && (
                <>
                  {getItems?.map((item, index) => {
                    return (
                      <Link
                        href="#"
                        key={index}
                        className={`${
                          index === 3 ? "md:col-span-2 md:row-span-2" : ""
                        }`}
                        onClick={() => {
                          setIsOpen(true);
                          setPhotoIndex(index);
                        }}
                      >
                        <img
                          src={item.src}
                          alt="gallery"
                          data-fancybox="gallery"
                          className="h-full w-full rounded-md object-cover"
                          data-caption={item.title}
                        />
                      </Link>
                    );
                  })}
                </>
              )}

              {isOpen && (
                <Lightbox
                  mainSrc={`${getItems[photoIndex]?.src}`}
                  nextSrc={`${
                    getItems[photoIndex + (1 % getItems.length)]?.src
                  }`}
                  prevSrc={
                    getItems[
                      (photoIndex + getItems.length - 1) % getItems.length
                    ]?.src
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % getItems.length)
                  }
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + getItems.length - 1) % getItems.length
                    )
                  }
                  imageTitle={getItems[photoIndex]?.title}
                  imageCaption={getItems[photoIndex]?.description}
                  animationDuration={300}
                  keyRepeatLimit={180}
                />
              )}
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {tabs1 === "All controls" && (
                <>
                  {getItems.map((item, index) => {
                    return (
                      <Link
                        href="#"
                        key={item.id}
                        className={`${
                          index === 3 ? "md:col-span-2 md:row-span-2" : ""
                        }`}
                        onClick={() => {
                          setIsOpen(true);
                          setPhotoIndex(index);
                        }}
                      >
                        <img
                          src={item.src}
                          alt="gallery"
                          data-fancybox="gallery"
                          className="h-full w-full rounded-md object-cover"
                          data-caption={item.title}
                        />
                      </Link>
                    );
                  })}
                </>
              )}
              {isOpen && (
                <Lightbox
                  mainSrc={`${getItems[photoIndex]?.src}`}
                  nextSrc={`${
                    getItems[photoIndex + (1 % getItems.length)]?.src
                  }`}
                  prevSrc={
                    getItems[
                      (photoIndex + getItems.length - 1) % getItems.length
                    ]?.src
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % getItems.length)
                  }
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + getItems.length - 1) % getItems.length
                    )
                  }
                  enableZoom={false}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// import React, { useEffect } from 'react';
// import './App.css'; // Import your CSS file here

// function App() {
//   useEffect(() => {
//     // Load the ArcGIS modules after the component mounts
//     import('@arcgis/core/Map').then((arcgisMap) => {
//       import('@arcgis/core/views/SceneView').then((SceneView) => {
//         import('@arcgis/core/layers/ElevationLayer').then((ElevationLayer) => {
//           import('@arcgis/core/layers/TileLayer').then((TileLayer) => {
//             import('@arcgis/core/layers/FeatureLayer').then((FeatureLayer) => {
//               import('@arcgis/core/widgets/LayerList').then((LayerList) => {
//                 const marsElevation = new ElevationLayer.default({
//                   url:
//                     'https://astro.arcgis.com/arcgis/rest/services/OnMars/MDEM200M/ImageServer',
//                   copyright:
//                     'NASA, ESA, HRSC, Goddard Space Flight Center, USGS Astrogeology Science Center, Esri',
//                 });

//                 const marsImagery = new TileLayer.default({
//                   url:
//                     'https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer',
//                   title: 'Imagery',
//                   copyright:
//                     'USGS Astrogeology Science Center, NASA, JPL, Esri',
//                 });

//                 const map = new arcgisMap.default({
//                   ground: {
//                     layers: [marsElevation],
//                   },
//                   layers: [marsImagery],
//                 });

//                 const view = new SceneView.default({
//                   map: map,
//                   container: 'viewDiv',
//                   qualityProfile: 'high',
//                   spatialReference: {
//                     wkid: 104971,
//                   },
//                   camera: {
//                     position: {
//                       x: 27.63423,
//                       y: -6.34466,
//                       z: 1281525.766,
//                       spatialReference: 104971,
//                     },
//                     heading: 332.28,
//                     tilt: 37.12,
//                   },
//                 });

//                 const cratersLayer = new FeatureLayer.default({
//                   url:
//                     'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Mars_Nomenclature_Mountains/FeatureServer',
//                   definitionExpression: "type = 'Crater, craters'",
//                   title: 'Craters',
//                   renderer: {
//                     type: 'simple',
//                     symbol: {
//                       type: 'polygon-3d',
//                       symbolLayers: [
//                         {
//                           type: 'fill',
//                           material: { color: [255, 255, 255, 0.1] },
//                           outline: {
//                             color: [0, 0, 0, 0.4],
//                             size: 2,
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   labelingInfo: [
//                     {
//                       labelPlacement: 'above-center',
//                       labelExpressionInfo: { expression: '$feature.NAME' },
//                       symbol: {
//                         type: 'label-3d',
//                         symbolLayers: [
//                           {
//                             type: 'text',
//                             material: {
//                               color: [0, 0, 0, 0.9],
//                             },
//                             halo: {
//                               size: 2,
//                               color: [255, 255, 255, 0.7],
//                             },
//                             font: {
//                               size: 10,
//                             },
//                           },
//                         ],
//                         verticalOffset: {
//                           screenLength: 40,
//                           maxWorldLength: 500000,
//                           minWorldLength: 0,
//                         },
//                         callout: {
//                           type: 'line',
//                           size: 0.5,
//                           color: [255, 255, 255, 0.9],
//                           border: {
//                             color: [0, 0, 0, 0.3],
//                           },
//                         },
//                       },
//                     },
//                   ],
//                 });

//                 map.add(cratersLayer);

//                 const shadedReliefLayer = new TileLayer.default({
//                   url:
//                     'https://astro.arcgis.com/arcgis/rest/services/OnMars/MColorDEM/MapServer',
//                   copyright:
//                     'USGS Astrogeology Science Center, NASA, JPL, ESA, DLR, Esri',
//                   title: 'Shaded relief',
//                   visible: false,
//                 });

//                 map.add(shadedReliefLayer);

//                 const layerList = new LayerList.default({
//                   view,
//                 });

//                 view.ui.add(layerList, 'top-right');
//               });
//             });
//           });
//         });
//       });
//     });
//   }, []);

//   return <div id="viewDiv" style={{ height: '100vh' }}></div>;
// }

// export default App;
