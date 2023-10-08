import { Info, Item, Heading, Desc } from "./InfoStyles";

const InfoContainer = ({ planetData }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      y: 25,
      transition: { duration: 1 },
    },
  };

  return (
    <Info
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Item>
        <Heading>
          <p className="text-2xl font-bold text-info uppercase">
            Rotation Time
          </p>
        </Heading>
        <Desc>{planetData.rotation}</Desc>
      </Item>
      <Item>
        <Heading>
          <p className="text-2xl font-bold text-info uppercase">
            Revolution Time
          </p>
        </Heading>
        <Desc>{planetData.revolution}</Desc>
      </Item>
      <Item>
        <p className="text-2xl font-bold text-info uppercase">Radius KM</p>
        <Desc>{planetData.radius}</Desc>
      </Item>
      <Item>
        <p className="text-2xl font-bold text-info uppercase">Average temp.</p>
        <Desc>{planetData.temperature}</Desc>
      </Item>
    </Info>
  );
};

export default InfoContainer;
