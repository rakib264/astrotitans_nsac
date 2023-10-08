import { Tab } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { LiaRobotSolid } from "react-icons/lia";

const roversData = [
  {
    id: 1,
    name: "Perseverance Rover",
    releasedDate: "July 30, 2020",
    landedDate: "February 18, 2021",
    responsibility:
      "To search for signs of ancient microbial life on Mars, collect samples of Martian rock and regolith, and cache them for future return to Earth.",
    imgSrc: "/assets/images/perseverence.png",
    srcLocation: "https://mars.nasa.gov/maps/location/?mission=M20&site=NOW",

    gallery: [
      {
        id: 1,
        src: "/assets/images/img1.png",
      },
      {
        id: 2,
        src: "/assets/images/img2.png",
      },
      {
        id: 3,
        src: "/assets/images/img3.png",
      },
      {
        id: 4,
        src: "/assets/images/img4.png",
      },
      {
        id: 5,
        src: "/assets/images/img5.png",
      },
      {
        id: 6,
        src: "/assets/images/img6.png",
      },
    ],
  },
  {
    id: 2,
    name: "Curiosity Rover",
    releasedDate: "November 26, 2011",
    landedDate: "August 6, 2012",
    responsibility:
      " To investigate whether Mars ever had an environment that could have supported microbial life, and to assess the planet's habitability potential.",
    imgSrc: "/assets/images/curiocity.png",

    srcLocation:
      "https://mars.nasa.gov/maps/location/?mission=MSL&amp;site=NOW",
    gallery: [
      {
        id: 7,
        src: "/assets/images/img7.png",
      },
      {
        id: 8,
        src: "/assets/images/img8.png",
      },
      {
        id: 9,
        src: "/assets/images/img9.png",
      },
      {
        id: 10,
        src: "/assets/images/img10.png",
      },
      {
        id: 11,
        src: "/assets/images/img11.png",
      },
      {
        id: 12,
        src: "/assets/images/img12.png",
      },
    ],
  },
  {
    id: 3,
    name: "Opportunity Rover",
    releasedDate: "July 7, 2003",
    landedDate: "January 24, 2004",
    responsibility:
      "To explore the Meridiani Planum region of Mars for evidence of past water activity.",
    imgSrc: "/assets/images/opportunity.png",
    srcLocation: "https://mars.nasa.gov/embed/22434/",
    gallery: [
      {
        id: 13,
        src: "/assets/images/img13.png",
      },
      {
        id: 14,
        src: "/assets/images/img14.png",
      },
      {
        id: 15,
        src: "/assets/images/img15.png",
      },
      {
        id: 16,
        src: "/assets/images/img16.png",
      },
      {
        id: 17,
        src: "/assets/images/img17.png",
      },
      {
        id: 18,
        src: "/assets/images/img18.png",
      },
    ],
  },
];

const MarsRover = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0); // Track the selected tab index

  // Simulate a 2-second loading delay
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleTabClick = (index) => {
    setLoading(true);
    setSelectedTab(index);
  };
  return (
    <div>
      <div className="mb-5 w-full">
        <Tab.Group>
          <Tab.List className="mt-3 mb-5 grid grid-cols-4 gap-2 rtl:space-x-reverse sm:flex sm:flex-wrap sm:justify-center sm:space-x-3">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "!bg-info text-white !outline-none" : ""
                  }
                text-xl flex flex-col items-center justify-center rounded-lg bg-gray-900 p-7 py-3 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] `}
                >
                  <LiaRobotSolid className="text-gray-100 w-8 h-8" />
                  Perseverence Rover
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "!bg-info text-white !outline-none" : ""
                  }
                text-xl flex flex-col items-center justify-center rounded-lg bg-gray-900 p-7 py-3 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] `}
                >
                  <LiaRobotSolid className="text-gray-100 w-8 h-8" />
                  Curiocity Rover
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "!bg-info text-white !outline-none" : ""
                  }
                text-xl flex flex-col items-center justify-center rounded-lg bg-gray-900 p-7 py-3 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] `}
                >
                  <LiaRobotSolid className="text-gray-100 w-8 h-8" />
                  Opportunity Rover
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="w-full flex items-center justify-center">
            <div>
              {roversData.map((rover, index) => (
                <Tab.Panel key={rover.id}>
                  <div className="active">
                    <div className="w-full bg-blue-900 px-20 py-12 my-8 rounded-md">
                      <h4 className="mb-4 text-orange-500 text-4xl font-semibold text-center">
                        {rover?.name}
                      </h4>
                      <img
                        src={rover?.imgSrc}
                        className="w-full h-auto object-cover rounded-md"
                        alt="rover"
                      />

                      <div className="rounded-tr-md my-8 rounded-br-md border border-l-4 border-white-light !border-l-orange-500 bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                        <div className="flex flex-col items-start">
                          <div className="py-4">
                            <p className="text-2xl text-white font-semibold">
                              Released Date:{" "}
                              <span className="text-orange-500 text-2xl font-semibold pl-2">
                                {rover?.releasedDate}
                              </span>
                            </p>
                            <p className="text-2xl text-white font-semibold">
                              {" "}
                              Landed Date:{" "}
                              <span className="text-orange-500 text-2xl font-semibold pl-2">
                                {rover?.landedDate}
                              </span>
                            </p>
                          </div>
                          <div className="text-white text-2xl font-semibold">
                            Responsibility:
                            <p className="m-0 text-lg not-italic text-[#515365] dark:text-gray-200">
                              {rover?.responsibility}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={
                          rover?.name === "Perseverance Rover"
                            ? "/perseverance"
                            : rover?.name === "Curiosity Rover"
                            ? "/curiosity"
                            : "/opportunity"
                        }
                      >
                        <button className="w-full btn btn-primary btn-lg">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default MarsRover;
