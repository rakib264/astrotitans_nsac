"use client";

import MainLayout from "@/components/AppSpace/Root/Layout/MainLayout";
import ClientOnly from "@/components/Client.jsx/Clientonly";
import Navbar from "@/components/components/Navbar/Navbar";
import PlanetSection from "@/components/components/PlanetSection/PlanetSection";
import Wrapper from "@/components/components/Wrapper/Wrapper";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Provider } from "react-redux";
import { data } from "./data";

const Neptune = () => {
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
      </MainLayout>
    </ClientOnly>
  );
};

export default Neptune;
