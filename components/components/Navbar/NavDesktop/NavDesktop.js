import { Nav, List, Item, LinkNav } from "./NavDesktopStyles";
import { planets } from "../data";
import Link from "next/link";

const NavDesktop = ({ pathName, activePlanet, onHover }) => {
  return (
    <Nav>
      <List>
        {planets.map((planet) => (
          <Item key={planet.id}>
            <Link href={planet.path}>
              <LinkNav
                to={planet.path}
                $bgcolor={planet.color}
                $isActive={
                  planet.path === pathName || planet.path === activePlanet
                }
                onMouseOver={() => onHover(planet.path)}
                onMouseLeave={() => onHover(false)}
                onFocus={() => onHover(planet.path)}
                onBlur={() => onHover(false)}
              >
                <p className="text-lg sm:text-2xl">{planet.name}</p>
              </LinkNav>
            </Link>
          </Item>
        ))}
      </List>
    </Nav>
  );
};

export default NavDesktop;
