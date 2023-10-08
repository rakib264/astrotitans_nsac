"use client";

import MainLayout from "@/components/AppSpace/Root/Layout/MainLayout";
import React from "react";
import { useState, Fragment } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { Tab } from "@headlessui/react";
import ClientOnly from "@/components/Client.jsx/Clientonly";
import { GoRocket } from "react-icons/go";
import { BiSolidOffer, BiHealth } from "react-icons/bi";
import { MdOutlineLocalOffer, MdOutlinePriceChange } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";

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

const SpaceStation = () => {
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
    <ClientOnly>
      <MainLayout>
        <div className="panel px-12 md:px-20 lg:px-32 py-16">
          <div className="h-[600px] grid grid-cols-1 md:grid-cols-2 px-8 py-12">
            <div className="col-span-1 w-full h-full">
              <div className="flex flex-col w-full h-full p-16">
                <div className="flex flex-col gap-4">
                  <h3 className="text-6xl text-gray-900 dark:text-white">
                    Space Station
                  </h3>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-3xl text-gray-900 dark:text-cyan-500 font-bold">
                      Become an astronat
                    </h2>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Embark on an extraordinary journey to Mars and unlock the
                      secrets of the Red Planet's captivating landscapes and
                      ancient mysteries
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-8 py-8">
                  <button className="btn btn-secondary btn-lg">
                    Book Ticket
                  </button>
                  <button className="btn btn-secondary btn-lg">
                    Watch Videos
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1 w-full h-full">
              <iframe
                src="https://solarsystem.nasa.gov/gltf_embed/2378&#39"
                className="w-full h-full rounded-lg"
                scrolling="no"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="my-16 px-12">
            <h3 className="text-gray-900 py-6 text-center text-3xl md:text-5xl dark:text-cyan-500">
              Flight Path
            </h3>
            <div className="w-full h-auto">
              <img
                src="/assets/images/mars-route.png"
                alt="space"
                className="w-full h-auto"
              />
            </div>
            <div className="py-8 grid grid-cols-1 md:grid-cols-4">
              {flightData.map((flight) => (
                <div
                  key={flight?.id}
                  className="col-span-1 flex flex-col gap-3"
                >
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
            </div>
          </div>
          <div className="py-16 px-12">
            <h3 className="text-gray-900 py-6 text-center text-3xl md:text-5xl dark:text-cyan-500">
              Flight Essentials
            </h3>
            <div className="mb-5">
              <Tab.Group>
                <Tab.List className="mt-3 flex flex-wrap border-b border-black dark:border-gray-600">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? "text-secondary text-2xl !outline-none before:!w-full"
                            : ""
                        }
                         relative -mb-[1px] text-2xl flex items-center gap-2 p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                      >
                        <BiSolidOffer className="w-8 h-8" />
                        Our Offer Plans
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? "text-secondary text-2xl !outline-none before:!w-full"
                            : ""
                        }
                       relative -mb-[1px] text-2xl flex items-center gap-2 p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                      >
                        <GoRocket className="w-8 h-8" />
                        Space-Ships
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? "text-secondary text-2xl !outline-none before:!w-full"
                            : ""
                        }
                        relative -mb-[1px] text-2xl flex items-center gap-2 p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                      >
                        <BiHealth className="w-8 h-8" />
                        Health Condition
                      </button>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="active pt-10">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 px-8 pt-8 pb-4 flex flex-col items-center justify-center bg-blue-950 text-white rounded-md cursor-pointer shadow-md shadow-primary">
                          <img
                            src="/assets/images/galactica.png"
                            className="w-60 h-auto"
                            alt="spaceX"
                          />
                          <h3 className="text-4xl py-6 text-cyan-900 dark:text-orange-500">
                            Facilities For Single Person
                          </h3>
                          <div className="flex flex-col gap-4 py-4">
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Astronaut Training
                                </h4>
                              </div>
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Astronaut Training
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Stunning Views
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Spacewalks
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Sleeping Quarters
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Return to Earth
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlinePriceChange className="w-10 h-10 text-orange-500" />
                                <h4 className="text-3xl text-gray-900 dark:text-white">
                                  USD 210000
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <AiOutlineFieldTime className="w-10 h-10 text-cyan-500" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  8 Days
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="w-full px-8 py-6">
                            <button className="btn btn-primary text-xl w-full">
                              Book Now
                            </button>
                          </div>
                        </div>
                        <div className="col-span-1 px-8 pt-8 pb-4 flex flex-col items-center justify-center bg-blue-950 text-white rounded-md cursor-pointer shadow-md shadow-primary">
                          <img
                            src="/assets/images/spaceX.png"
                            className="w-88 h-auto"
                            alt="spaceX"
                          />
                          <h3 className="text-4xl py-6 text-cyan-900 dark:text-orange-500">
                            Facilities For Single Person
                          </h3>
                          <div className="flex flex-col gap-4 py-4">
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Astronaut Training
                                </h4>
                              </div>
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Astronaut Training
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Stunning Views
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Culinary Experiences
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Science and Research
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Return to Earth
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlinePriceChange className="w-10 h-10 text-orange-500" />
                                <h4 className="text-3xl text-gray-900 dark:text-white">
                                  USD 200000
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <AiOutlineFieldTime className="w-10 h-10 text-cyan-500" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  10 Days
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="w-full px-8 py-6">
                            <button className="btn btn-primary text-xl w-full">
                              Book Now
                            </button>
                          </div>
                        </div>
                        <div className="col-span-1 px-8 pt-8 pb-4 flex flex-col items-center justify-center bg-blue-950 text-white rounded-md cursor-pointer shadow-md shadow-primary">
                          <img
                            src="/assets/images/blue.png"
                            className="w-60 h-auto"
                            alt="spaceX"
                          />
                          <h3 className="text-4xl py-6 text-cyan-900 dark:text-orange-500">
                            Facilities For Single Person
                          </h3>
                          <div className="flex flex-col gap-4 py-4">
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Astronaut Training
                                </h4>
                              </div>
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Astronaut Training
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Stunning Views
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Spacewalks
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Educational and Cultural Programs
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  Return to Earth
                                </h4>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="col-span-1 flex items-center gap-2">
                                <MdOutlinePriceChange className="w-10 h-10 text-orange-500" />
                                <h4 className="text-3xl text-gray-900 dark:text-white">
                                  USD 210000
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <AiOutlineFieldTime className="w-10 h-10 text-cyan-500" />
                                <h4 className="text-2xl text-gray-900 dark:text-white">
                                  8 Days
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="w-full px-8 py-6">
                            <button className="btn btn-primary text-xl w-full">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="pt-10">
                      <div className="grid grid-col-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 px-8 pt-8 pb-4 bg-blue-900">
                          <div className="flex flex-col items-center justify-center">
                            <img
                              src="/assets/images/spaceXRocket.png"
                              className="w-60 h-auto"
                              alt="spaceX"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="pt-5">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>Disabled</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </MainLayout>
    </ClientOnly>
  );
};

export default SpaceStation;
