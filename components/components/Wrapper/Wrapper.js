import { Container } from "./WrapperStyles";
import { starsBackground } from "./starsBackground";

const Wrapper = ({ children }) => {
  return <Container background={starsBackground}>{children}</Container>;
};

export default Wrapper;
