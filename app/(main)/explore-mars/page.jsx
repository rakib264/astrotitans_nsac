"use client";
import MarsMap from "@/components/AppSpace/MarsMap";
import MarsRover from "@/components/AppSpace/MarsRovers/MarsRover";
import MarsWeather from "@/components/AppSpace/weather/Weather";
import Weather2 from "@/components/AppSpace/weather/Weather2";

//Carousel Component

export default function ExploreMars() {
  return (
    <div className="w-full flex items-center justify-center  py-16 px-16 md:px-24 lg:px-40">
      <div>
        {/* <MarsGlobe /> */}
        <div className="w-full z-40">
          {/* <iframe
          src="https://mars.nasa.gov/gltf_embed/24881"
          width="100%"
          height="100%"
          frameborder="0"
        />{" "} */}
          {/* <WeatherMap /> */}

          <MarsMap />

          {/* <MarsWeather /> */}
          <MarsRover />
        </div>
        <div className="w-full flex items-center justify-center  py-16">
          <div className="">
            <h2 className="text-3xl text-center text-white font-semibold pb-8">
              Mars Weather
            </h2>
            <MarsWeather />
            <Weather2 />
          </div>
        </div>
      </div>
    </div>
  );
}
