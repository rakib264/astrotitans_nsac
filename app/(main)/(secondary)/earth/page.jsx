"use client";

import EarthGlobe from "@/components/AppSpace/EarthGlobe";
import MainLayout from "@/components/AppSpace/Root/Layout/MainLayout";
import ClientOnly from "@/components/Client.jsx/Clientonly";
import Navbar from "@/components/components/Navbar/Navbar";
import PlanetSection from "@/components/components/PlanetSection/PlanetSection";
import Wrapper from "@/components/components/Wrapper/Wrapper";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Provider } from "react-redux";
import { data } from "./data";

const Earth = () => {
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
        <div className="w-full py-16 z-50">
          <h3 className="text-4xl text-danger text-center uppercase my-16">
            Astroids are coming towards Earth
          </h3>
          <EarthGlobe />
        </div>
      </MainLayout>
    </ClientOnly>
  );
};

export default Earth;
