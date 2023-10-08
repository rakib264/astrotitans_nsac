import React, { useState } from "react";
const flightData = [
  {
    id: 1,
    title: "Launch & Booster Return",
    desc: "Falcon 9’s first stage lofts Dragon to orbit. Falcon 9’s first and second stage separate. Second stage accelerates Dragon to orbital velocity.",
    image: "/assets/images/station1.png",
  },
  {
    id: 2,
    title: "Arrives In Earth Orbit",
    desc: "Dragon separates from Falcon 9’s second stage and performs initial orbit activation and checkouts of propulsion, life support, and thermal control systems.",
    image: "/assets/images/station2.png",
  },
  {
    id: 3,
    title: "Tankers Refill & Return to Earth",
    desc: "Dragon performs delta-velocity orbit raising maneuvers to catch up with the International Space Station.",
    image: "/assets/images/station3.png",
  },
  {
    id: 4,
    title: "Ship Traveled to Mars",
    desc: "Dragon establishes a communication link with the International Space Station and performs its final orbit raising delta-velocity burn.",
    image: "/assets/images/station4.png",
  },
  {
    id: 5,
    title: "SHIP REFILLED ON MARS USING LOCAL RESOURCES",
    desc: "Dragon establishes relative navigation to the International Space Station and arrives along the docking axis, initiating an autonomous approach.",
    image: "/assets/images/station5.png",
  },
  {
    id: 6,
    title: "Performs Mars Ascend",
    desc: "Dragon performs final approach and docks with the International Space Station, followed by pressurization, hatch open, and crew ingress.",
    image: "/assets/images/station6.png",
  },
];

const Flight = () => {
  const [hover, setHover] = useState(false);
  const [stepNum, setStepNum] = useState(null);

  const handleMouseEnter = (id) => {
    console.log("Entering", id);
    setHover(true);
    setStepNum(id);
  };

  const handleMouseLeave = (id) => {
    setHover(false);
    setStepNum(id);
  };
  return (
    <div>
      <div className="my-16 px-12 bg-blue-950 shadow-md shadow-primary">
        <h3 className="text-gray-900 py-6 text-center text-3xl md:text-5xl dark:text-cyan-500">
          Flight Path
        </h3>
        <div className="w-full h-auto">
          <img src="/assets/nasa.png" alt="space" className="w-full h-auto" />
        </div>
        {/* <div className="py-8 grid grid-cols-1 md:grid-cols-4">
          {flightData.map((flight) => (
            <div key={flight?.id} className="col-span-1 flex flex-col gap-3">
              <img
                src={flight?.image}
                alt={flight?.title}
                className={`w-32 h-24 ${
                  hover === true && flight?.id === stepNum
                    ? "visible"
                    : "invisible"
                }`}
              />
              <h3
                onMouseEnter={() => handleMouseEnter(flight?.id)}
                onMouseLeave={() => handleMouseLeave(flight?.id)}
                className="text-2xl text-gray-900 dark:text-white uppercase"
              >
                0{flight?.id}. {flight?.title}
              </h3>
              <span
                className={`${
                  hover === true && flight?.id === stepNum
                    ? "visible"
                    : "invisible"
                } text-lg text-gray-900 dark:text-gray-400`}
              >
                {flight?.desc}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Flight;
