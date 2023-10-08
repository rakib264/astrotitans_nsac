import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { asteroidsBackground } from "./asteroidsBackground";

import Link from "next/link";

export const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Planet = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(102, 166, 229, 0.2);
  border-radius: 1000px;
  transform: translate(-50%, -50%);
  transition: border 300ms ease;

  &::before {
    position: absolute;
    content: "";
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    transition: transform 300ms ease;
  }

  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @media (min-width: 768px) {
    &:hover {
      border: 1px solid ${(props) => props.$planetColor};

      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      border: 1px solid ${(props) => props.$planetColor};

      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }

    ${(props) =>
      props.$isActive
        ? css`
            border: 1px solid ${(props) => props.$planetColor};
            &::before {
              transform: scale(1.5) translate(-50%, -50%);
            }
          `
        : ""};
  }
`;

export const Sun = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 180px;
  width: 180px;
  border-radius: 1000px;
  background-image: url("/assets/images/sun.png");
  background-size: cover;
  box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4),
    0 0 22px 11px rgba(255, 203, 0, 0.13);
  transform: translate(-50%, -50%);
`;

export const Mercury = styled(Planet)`
  width: 230px;
  height: 230px;
  animation: orbit 7.1867343561s linear infinite;
  z-index: 100;

  &::before {
    height: 22px;
    width: 22px;
    background-image: url(/assets/images/planet-mercury.svg);
    background-size: cover;
  }
`;

export const Venus = styled(Planet)`
  width: 340px;
  height: 340px;
  animation: orbit 18.4555338265s linear infinite;
  z-index: 99;

  &::before {
    height: 28px;
    width: 28px;
    background-image: url(/assets/images/planet-venus.svg);
    background-size: cover;
  }
`;

export const Earth = styled(Planet)`
  width: 450px;
  height: 450px;
  animation: orbit 30s linear infinite;
  z-index: 98;

  &::before {
    width: 32px;
    height: 32px;
    background-image: url(/assets/images/planet-earth.svg);
    background-size: cover;
  }
`;

export const Mars = styled(Planet)`
  width: 540px;
  height: 540px;
  animation: orbit 56.4261314589s linear infinite;
  z-index: 97;

  &::before {
    width: 26px;
    height: 26px;
    background-image: url(/assets/images/planet-mars.svg);
    background-size: cover;
  }
`;

export const Jupiter = styled(Planet)`
  width: 660px;
  height: 660px;
  animation: orbit 510.7228171013s linear infinite;
  z-index: 96;

  &::before {
    width: 68px;
    height: 68px;
    background-image: url(/assets/images/planet-jupiter.svg);
    background-size: cover;
  }
`;

export const Saturn = styled(Planet)`
  width: 800px;
  height: 800px;
  animation: orbit 850.6952471456s linear infinite;
  z-index: 95;

  &::before {
    width: 86px;
    height: 76px;
    background-image: url(/assets/images/planet-saturn.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Uranus = styled(Planet)`
  width: 880px;
  height: 880px;
  animation: orbit 1250.4001967933s linear infinite;
  z-index: 94;

  &::before {
    width: 40px;
    height: 40px;
    background-image: url(/assets/images/planet-uranus.svg);
    background-size: cover;
  }
`;

export const Neptune = styled(Planet)`
  width: 990px;
  height: 990px;
  animation: orbit 1651.7838624549s linear infinite;
  z-index: 93;

  &::before {
    width: 36px;
    height: 36px;
    background-image: url(/assets/images/planet-neptune.svg);
    background-size: cover;
  }
`;

export const AsteroidsBelt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(102, 166, 229, 0.12);
  border-radius: 1000px;
  transform: translate(-50%, -50%);

  height: 630px;
  width: 630px;
  opacity: 0.7;
  border-color: transparent;
  overflow: hidden;
  animation: orbit 179.9558282773s linear infinite;

  &::before {
    position: absolute;
    content: "";
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    height: 210px;
    width: 210px;
    background: transparent;
    border-radius: 140px !important;
    box-shadow: ${asteroidsBackground};
  }

  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;
