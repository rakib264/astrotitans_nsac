"use client";

import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import ClientOnly from "../Client.jsx/Clientonly";

const VerticalBorderedTab = () => {
  return (
    <ClientOnly>
      <div className="bg-white px-10 py-8 h-auto">
        {/* Vertical Border */}
        <div className="panel" id="vertical_border">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold text-black">
              Vertical Bordered
            </h5>
          </div>
          <div className="mb-5 flex flex-col sm:flex-row">
            <Tab.Group>
              <div className="mx-10 mb-5 sm:mb-0">
                <Tab.List className="m-auto w-24 text-center">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected ? "!bg-success text-white !outline-none" : ""
                        }
                                                    -mb-[1px] w-full border  
                                                    px-3.5 py-3 flex items-center  before:inline-block hover:bg-success hover:text-white border-[#191e3a]`}
                      >
                        Home
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected ? "!bg-success text-white !outline-none" : ""
                        }
                                                    -mb-[1px] w-full border px-3.5 py-3 flex items-center before:inline-block hover:bg-success hover:text-white border-[#191e3a]`}
                      >
                        Profile
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected ? "!bg-success text-white !outline-none" : ""
                        }
                                                    -mb-[1px] w-full border px-3.5 py-3 before:inline-block flex items-center justify-center hover:bg-success hover:text-white border-[#191e3a]`}
                      >
                        Messages
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected ? "!bg-success text-white !outline-none" : ""
                        }
                                                    -mb-[1px] w-full border px-3.5 py-3 flex items-center  before:inline-block hover:bg-success hover:text-white border-[#191e3a]`}
                      >
                        Settings
                      </button>
                    )}
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="active">
                    <h4 className="mb-4 text-2xl font-semibold">
                      We move your world!
                    </h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                          src="/assets/images/profile-34.jpeg"
                          alt="img"
                          className="m-0 h-20 w-20 p-[2px] rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h5 className="mb-3 text-xl font-medium">
                          Media heading
                        </h5>
                        <p className="text-white-dark">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                    <div className="flex items-start">
                      <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo.
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default VerticalBorderedTab;
