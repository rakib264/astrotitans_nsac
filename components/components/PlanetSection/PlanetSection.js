import { useState, useEffect } from "react";
import { Section, Container } from "./PlanetSectionStyles";
import useReplaceInfo from "./useReplaceInfo";
import Tabs from "./Tabs/Tabs";
import Illustration from "./Illustration/Illustration";
import Intro from "./Intro/Intro";
import Info from "./Info/Info";

const PlanetSection = ({ planetData }) => {
  const [handleClick, currentData, currentTab, isChanging] =
    useReplaceInfo(planetData);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const checkWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkWindowWidth);

      return () => {
        window.removeEventListener("resize", checkWindowWidth);
      };
    }
  }, []);

  return (
    <div className="max-w-full">
      <Section>
        <Container>
          <Tabs
            planetData={planetData}
            handleClick={handleClick}
            currentTab={currentTab}
            windowWidth={windowWidth}
          />
          <Illustration
            planetData={planetData}
            currentData={currentData}
            isChanging={isChanging}
          />
          <Intro
            planetData={planetData}
            currentData={currentData}
            isChanging={isChanging}
          />
          <Info planetData={planetData} />
        </Container>
      </Section>
    </div>
  );
};

export default PlanetSection;
