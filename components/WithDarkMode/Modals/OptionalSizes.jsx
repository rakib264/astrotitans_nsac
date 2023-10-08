import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const OptionalSizes = () => {
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  return (
    <div className="col-span-2 md:col-span-1">
      {/* Optional sizes */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Optional sizes
          </h5>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-center gap-2">
            {/* Extra large */}
            <div>
              <button
                type="button"
                onClick={() => setModal5(true)}
                className="btn btn-warning"
              >
                Extra large
              </button>
              <Transition appear show={modal5} as={Fragment}>
                <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
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
                  <div className="fixed inset-0 z-[999] bg-[black]/60">
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
                        <Dialog.Panel className="panel my-8 w-full max-w-5xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                          <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                            <h5 className="text-lg font-bold">Modal Title</h5>
                            <button
                              onClick={() => setModal5(false)}
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
                            <p>
                              Mauris mi tellus, pharetra vel mattis sed, tempus
                              ultrices eros. Phasellus egestas sit amet velit
                              sed luctus. Orci varius natoque penatibus et
                              magnis dis parturient montes, nascetur ridiculus
                              mus. Suspendisse potenti. Vivamus ultrices sed
                              urna ac pulvinar. Ut sit amet ullamcorper mi.
                            </p>
                            <div className="mt-8 flex items-center justify-end">
                              <button
                                onClick={() => setModal5(false)}
                                type="button"
                                className="btn btn-outline-danger"
                              >
                                Discard
                              </button>
                              <button
                                onClick={() => setModal5(false)}
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

            {/* Large */}
            <div>
              <button
                type="button"
                onClick={() => setModal6(true)}
                className="btn btn-danger"
              >
                Large
              </button>
              <Transition appear show={modal6} as={Fragment}>
                <Dialog as="div" open={modal6} onClose={() => setModal6(false)}>
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
                  <div className="fixed inset-0 z-[999] bg-[black]/60">
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
                        <Dialog.Panel className="panel my-8 w-full max-w-xl overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark">
                          <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                            <h5 className="text-lg font-bold">Modal Title</h5>
                            <button
                              onClick={() => setModal6(false)}
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
                            <p>
                              Mauris mi tellus, pharetra vel mattis sed, tempus
                              ultrices eros. Phasellus egestas sit amet velit
                              sed luctus. Orci varius natoque penatibus et
                              magnis dis parturient montes, nascetur ridiculus
                              mus. Suspendisse potenti. Vivamus ultrices sed
                              urna ac pulvinar. Ut sit amet ullamcorper mi.
                            </p>
                            <div className="mt-8 flex items-center justify-end">
                              <button
                                onClick={() => setModal6(false)}
                                type="button"
                                className="btn btn-outline-danger"
                              >
                                Discard
                              </button>
                              <button
                                onClick={() => setModal6(false)}
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

            {/* Small */}
            <div>
              <button
                type="button"
                onClick={() => setModal7(true)}
                className="btn btn-secondary"
              >
                Small
              </button>
              <Transition appear show={modal7} as={Fragment}>
                <Dialog as="div" open={modal7} onClose={() => setModal7(false)}>
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
                  <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
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
                        <Dialog.Panel className="panel my-8 w-full max-w-sm overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark">
                          <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                            <h5 className="text-lg font-bold">Modal Title</h5>
                            <button
                              onClick={() => setModal7(false)}
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
                            <p>
                              Mauris mi tellus, pharetra vel mattis sed, tempus
                              ultrices eros. Phasellus egestas sit amet velit
                              sed luctus. Orci varius natoque penatibus et
                              magnis dis parturient montes, nascetur ridiculus
                              mus. Suspendisse potenti. Vivamus ultrices sed
                              urna ac pulvinar. Ut sit amet ullamcorper mi.
                            </p>
                            <div className="mt-8 flex items-center justify-end">
                              <button
                                onClick={() => setModal7(false)}
                                type="button"
                                className="btn btn-outline-danger"
                              >
                                Discard
                              </button>
                              <button
                                onClick={() => setModal7(false)}
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
        </div>
      </div>
    </div>
  );
};

export default OptionalSizes;
