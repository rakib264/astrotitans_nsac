import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const VideoModal = () => {
  const [modal8, setModal8] = useState(false);
  return (
    <div className="col-span-2 md:col-span-1">
      {/* Video */}
      <div className="panel border-[2px] rounded-md p-3">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold text-black">Video</h5>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setModal8(true)}
              type="button"
              className="btn btn-primary"
            >
              Play Youtube
            </button>
          </div>
          <Transition appear show={modal8} as={Fragment}>
            <Dialog as="div" open={modal8} onClose={() => setModal8(false)}>
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
                    <Dialog.Panel className="my-8 w-full max-w-3xl overflow-hidden">
                      <div className="text-right">
                        <button
                          onClick={() => setModal8(false)}
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
                      <iframe
                        title="youtube-video"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        className="h-[250px] w-full md:h-[550px]"
                      ></iframe>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
