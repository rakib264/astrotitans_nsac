import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Tab } from "@headlessui/react";

const TabsModal = () => {
  const [modal18, setModal18] = useState(false);
  const isRtl = false;
  return (
    <div className="">
      {/* tabs */}
      <div>
        <button
          onClick={() => setModal18(true)}
          type="button"
          className="btn btn-info"
        >
          Tabs
        </button>
        <Transition appear show={modal18} as={Fragment}>
          <Dialog as="div" open={modal18} onClose={() => setModal18(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0" />
            </Transition.Child>
            <div
              id="tabs_modal"
              className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60"
            >
              <div className="flex min-h-screen items-start justify-center px-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                      <h5 className="text-lg font-bold">Tabs</h5>
                      <button
                        onClick={() => setModal18(false)}
                        type="button"
                        className="text-white-dark hover:text-dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    <div className="p-5">
                      <Tab.Group>
                        <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                          <Tab as={Fragment}>
                            {({ selected }) => (
                              <button
                                type="button"
                                className={`${
                                  selected
                                    ? "!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black "
                                    : ""
                                } -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                              >
                                Home
                              </button>
                            )}
                          </Tab>
                          <Tab as={Fragment}>
                            {({ selected }) => (
                              <button
                                type="button"
                                className={`${
                                  selected
                                    ? "!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black "
                                    : ""
                                }-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                              >
                                Profile
                              </button>
                            )}
                          </Tab>
                          <Tab as={Fragment}>
                            {({ selected }) => (
                              <button
                                type="button"
                                className={`${
                                  selected
                                    ? "!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black "
                                    : ""
                                }-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                              >
                                Contact
                              </button>
                            )}
                          </Tab>
                          <Tab className="pointer-events-none -mb-[1px] block p-3.5 py-2 text-white-light outline-none dark:text-dark">
                            Disabled
                          </Tab>
                        </Tab.List>
                        <Tab.Panels className="text-sm">
                          <Tab.Panel>
                            <div className="active pt-5">
                              <h4 className="mb-4 text-2xl font-semibold">
                                We move your world!
                              </h4>
                              <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div>
                              <div className="flex items-start pt-5">
                                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                                  <img
                                    src="/assets/images/profile-34.jpeg"
                                    alt="img"
                                    className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                                  />
                                </div>
                                <div className="flex-auto">
                                  <h5 className="mb-4 text-xl font-medium">
                                    Media heading
                                  </h5>
                                  <p className="text-white-dark">
                                    Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in
                                    vulputate at, tempus viverra turpis. Fusce
                                    condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in
                                    faucibus.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="pt-5">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>Disabled</Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                      <div className="mt-8 flex items-center justify-end">
                        <button
                          onClick={() => setModal18(false)}
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Discard
                        </button>
                        <button
                          onClick={() => setModal18(false)}
                          type="button"
                          className="btn btn-primary ml-3"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default TabsModal;
