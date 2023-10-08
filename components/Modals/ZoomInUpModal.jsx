import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ZoomInUpModal = () => {
  const [modal16, setModal16] = useState(false);
  const isRtl = false;
  return (
    <div className="">
      {/* ZoomInUp */}
      <div className="panel border-[2px] rounded-md p-3">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold text-black">
            ZoomInUp Animation Style Modal
          </h5>
        </div>
        {/* ZoomInUp */}
        <div className="mb-4">
          <button
            onClick={() => setModal16(true)}
            type="button"
            className="btn btn-primary"
          >
            ZoomIn Up
          </button>
          <Transition appear show={modal16} as={Fragment}>
            <Dialog as="div" open={modal16} onClose={() => setModal16(false)}>
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
                id="zoomIn_up_modal"
                className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60"
              >
                <div className="flex min-h-screen items-start justify-center px-4">
                  <Dialog.Panel className="panel animate__animated animate__zoomInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black">
                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 ">
                      <h5 className="text-lg font-bold">Modal Title</h5>
                      <button
                        onClick={() => setModal16(false)}
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
                    <div className="p-5 bg-[#fbfbfb]">
                      <p>
                        Mauris mi tellus, pharetra vel mattis sed, tempus
                        ultrices eros. Phasellus egestas sit amet velit sed
                        luctus. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Suspendisse
                        potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit
                        amet ullamcorper mi.
                      </p>
                      <div className="mt-8 flex items-center justify-end">
                        <button
                          onClick={() => setModal16(false)}
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Discard
                        </button>
                        <button
                          onClick={() => setModal16(false)}
                          type="button"
                          className="btn btn-primary mx-4"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default ZoomInUpModal;
