"use client";

import MarsRover from "@/components/AppSpace/MarsRovers/MarsRover";
import MainLayout from "@/components/AppSpace/Root/Layout/MainLayout";
import MarsWeather from "@/components/AppSpace/weather/Weather";
import Weather2 from "@/components/AppSpace/weather/Weather2";
import ClientOnly from "@/components/Client.jsx/Clientonly";
import Navbar from "@/components/components/Navbar/Navbar";
import PlanetSection from "@/components/components/PlanetSection/PlanetSection";
import Wrapper from "@/components/components/Wrapper/Wrapper";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { data } from "./data";

const Mars = () => {
  const pathname = usePathname();
  const [activePlanet, setActivePlanet] = useState("/");

  return (
    <ClientOnly>
      <MainLayout>
        <Navbar
          pathName={pathname}
          onHover={setActivePlanet}
          activePlanet={activePlanet}
        />
        <PlanetSection planetData={data} />;
        <div className="py-16">
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
        <div className="py-16">
          <MarsRover />
        </div>
      </MainLayout>
    </ClientOnly>
  );
};

export default Mars;
