import Link from "next/link";
import {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "./KeyVisualStyles";

const PlanetSwitch = ({ data, activePlanet }) => {
  const planetSwitch = () => {
    switch (data.name) {
      case "Mercury":
        return (
          <Link href={data.path}>
            <Mercury
              aria-label={`${data.name} page`}
              $isActive={activePlanet === data.path}
              $planetColor={data.sectionColor}
            />
          </Link>
        );
      case "Venus":
        return (
          <Link href={data.path}>
            <Venus
              aria-label={`${data.name} page`}
              $isActive={activePlanet === data.path}
              $planetColor={data.sectionColor}
            />
          </Link>
        );
      case "Earth":
        return (
          <Link href={data.path}>
            <Earth
              aria-label={`${data.name} page`}
              $isActive={activePlanet === data.path}
              $planetColor={data.sectionColor}
            />
          </Link>
        );
      case "Mars":
        return (
          <Link href={data.path}>
            <Mars
              aria-label={`${data.name} page`}
              $isActive={activePlanet === data.path}
              $planetColor={data.sectionColor}
            />
          </Link>
        );
      case "Jupiter":
        return (
          <Link href={data.path}>
            <Jupiter
              aria-label={`${data.name} page`}
              $isActive={activePlanet === data.path}
              $planetColor={data.sectionColor}
            />
          </Link>
        );
      case "Saturn":
        return (
          <Link href={data.path}>
            <Saturn
              aria-label={`${data.name} page`}
              $isActive={activePlanet === data.path}
              $planetColor={data.sectionColor}
            />
          </Link>
        );
      case "Uranus":
        return (
          <Link href={data.path}>
            <Uranus
              aria-label={`${data.name} page`}
              $isActive={activePlanet === data.path}
              $planetColor={data.sectionColor}
            />
          </Link>
        );
      case "Neptune":
        return (
          <Link href={data.path}>
            <Neptune
              aria-label={`${data.name} page`}
              $isActive={activePlanet === data.path}
              $planetColor={data.sectionColor}
            />
          </Link>
        );
    }
  };
  return <>{planetSwitch()}</>;
};

export default PlanetSwitch;
