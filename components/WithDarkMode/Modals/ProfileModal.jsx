import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ProfileModal = () => {
  const [modal19, setModal19] = useState(false);
  const isRtl = false;
  return (
    <div className="">
      {/* profile */}
      <div>
        <button
          type="button"
          onClick={() => setModal19(true)}
          className="btn btn-success"
        >
          Profile
        </button>
        <Transition appear show={modal19} as={Fragment}>
          <Dialog as="div" open={modal19} onClose={() => setModal19(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0"></div>
            </Transition.Child>
            <div
              id="profile_modal"
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
                  <Dialog.Panel className="panel my-8 w-full max-w-[300px] overflow-hidden rounded-lg border-0 bg-secondary p-0 text-black dark:bg-secondary dark:text-white-dark">
                    <div className="flex items-center justify-end pt-4 text-white pr-4 dark:text-white-light">
                      <button
                        onClick={() => setModal19(false)}
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
                      <div className="py-5 text-center text-white dark:text-white-light">
                        <div className="mx-auto mb-7 h-20 w-20 overflow-hidden rounded-full">
                          <img
                            src="/assets/images/profile-16.jpeg"
                            alt="img"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="font-semibold">
                          Click on view to access <br />
                          your profile.
                        </p>
                      </div>
                      <div className="flex justify-center gap-4 p-5">
                        <button
                          type="button"
                          className="btn dark:btn-dark bg-white text-black"
                        >
                          View
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

export default ProfileModal;
