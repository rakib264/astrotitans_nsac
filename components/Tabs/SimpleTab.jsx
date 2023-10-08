"use client";

import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import ClientOnly from "../Client.jsx/Clientonly";

const SimpleTab = () => {
  return (
    <ClientOnly>
      <div className="bg-white px-10 py-8 h-auto">
        {/* Simple Tabs */}
        <div className="panel" id="simple">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg text-black font-semibold">Simple Tabs</h5>
          </div>
          <div className="mb-5">
            <Tab.Group>
              <Tab.List className="mt-3 flex flex-wrap border-b border-white-light">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected
                          ? "!border-white-light !border-b-white  text-primary !outline-none "
                          : ""
                      } -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
                    >
                      Home
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected
                          ? "!border-white-light !border-b-white  text-primary !outline-none "
                          : ""
                      } -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary `}
                    >
                      Profile
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected
                          ? "!border-white-light !border-b-white  text-primary !outline-none "
                          : ""
                      } -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary `}
                    >
                      Contact
                    </button>
                  )}
                </Tab>
                <Tab className="pointer-events-none -mb-[1px] block p-3.5 py-2 outline-none text-dark">
                  Disabled
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="active pt-5">
                    <h4 className="mb-4 text-2xl font-semibold">
                      We move your world!
                    </h4>
                    <p className="mb-4 text-base text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-base text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    <div className="flex items-center gap-3 pt-5">
                      <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                          src="/assets/images/profile-34.jpeg"
                          alt="img"
                          className="m-0 p-[2px] h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                      </div>
                      <div className="flex-auto">
                        <h5 className="mb-2 text-xl font-medium">
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
                  <div className="pt-5">
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
                <Tab.Panel>Disabled</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default SimpleTab;
