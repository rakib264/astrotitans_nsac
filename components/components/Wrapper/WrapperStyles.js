import styled from "styled-components";
import { starsBackground } from "./starsBackground";

export const Container = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props?.theme?.colors?.black};
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 2px;
    top: -10px;
    background: white;
    box-shadow: ${starsBackground};
    border-radius: 100px;
  }
`;
