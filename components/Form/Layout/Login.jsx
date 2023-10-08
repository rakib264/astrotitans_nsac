import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextInput from "../Input/MultiFunctionalTextInput/TextInput";
import { useForm } from "react-hook-form";

const LoginModal = () => {
  const [modal2, setModal2] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Data2: ", data);
    setModal2(false);
  };

  return (
    <div className="col-span-2 md:col-span-1">
      {/* Vertically Centered */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Login Modal
          </h5>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => setModal2(true)}
              className="btn btn-info"
            >
              Login
            </button>
          </div>
          <Transition appear show={modal2} as={Fragment}>
            <Dialog as="div" open={modal2} onClose={() => setModal2(false)}>
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
                <div className="flex min-h-screen items-center justify-center px-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel
                      as="div"
                      className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark"
                    >
                      <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                        <h5 className="text-lg font-bold">Register Now</h5>
                        <button
                          type="button"
                          className="text-white-dark hover:text-dark"
                          onClick={() => setModal2(false)}
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
                      <div className="pl-5 pr-5 py-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="flex flex-col gap-0">
                            <TextInput
                              type="email"
                              label="Email"
                              placeholder="Type your mail"
                              id="email"
                              register={register}
                              errors={errors}
                            />
                            <TextInput
                              type="password"
                              label="Password"
                              placeholder="********"
                              id="password"
                              register={register}
                              errors={errors}
                            />
                          </div>
                          <div className="mt-8 flex items-center justify-end">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() => setModal2(false)}
                            >
                              Discard
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary ml-3"
                            >
                              Login
                            </button>
                          </div>
                        </form>
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
  );
};

export default LoginModal;
