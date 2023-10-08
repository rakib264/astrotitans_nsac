import React, { useState, Fragment, useCallback, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Health from "@/components/AppSpace/Booking/Health/Health";
import Vehicle from "../Vehicle/Vehicle";
import SeatPlane from "../SeatPlane/SeatPlane";
import Offers from "../Offers/Offers";
import Flight from "../Flight/Flight";
import Register from "../Register/Register";
import Confirm from "../Confirm/Confirm";
import Swal from "sweetalert2";

const STEPS = {
  REGISTER: 0,
  OFFERS: 1,
  FLIGHTPATH: 2,
  HEALTH: 3,
  VEHICLE: 4,
  SEAT: 5,
  CONFIRM: 6,
};

const MainModalComponent = () => {
  const [modal9, setModal9] = useState(false);

  const [step, setStep] = useState(STEPS.REGISTER);

  const showAlert = async (color) => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: `color-${color}`,
      },
    });
    toast.fire({
      icon: "success", //{'error', 'warning'}
      title: "Booked successfully",
      padding: "10px 20px",
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit = () => {
    if (step !== STEPS.CONFIRM) {
      return onNext();
    }
    setModal9(false);
    showAlert("primary");

    console.log("Reached Final");
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.CONFIRM) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = <Register />;

  if (step === STEPS.OFFERS) {
    bodyContent = <Offers />;
  }

  if (step === STEPS.FLIGHTPATH) {
    bodyContent = <Flight />;
  }

  if (step === STEPS.HEALTH) {
    bodyContent = <Health />;
  }

  if (step === STEPS.VEHICLE) {
    bodyContent = <Vehicle />;
  }

  if (step === STEPS.SEAT) {
    bodyContent = <SeatPlane />;
  }

  if (step === STEPS.CONFIRM) {
    bodyContent = <Confirm />;
  }

  return (
    <div>
      <div
        onClick={() => setModal9(true)}
        type="button"
        className="text-white cursor-pointer md:text-xl lg:text-3xl hover:text-cyan-300 relative group uppercase"
      >
        Book Now
      </div>
      <BookingModal
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={onBack}
        body={bodyContent}
        onSubmit={onSubmit}
        modal9={modal9}
        setModal9={setModal9}
      />
    </div>
  );
};

const BookingModal = ({
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  body,
  onSubmit,
  modal9,
  setModal9,
}) => {
  const handleSecondaryAction = useCallback(() => {
    if (!secondaryAction) {
      return;
    }
    secondaryAction();
  }, [secondaryAction]);

  const handleSubmit = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="">
      {/* FadeIn */}
      <div>
        <Transition appear show={modal9} as={Fragment}>
          <Dialog as="div" open={modal9} onClose={() => setModal9(false)}>
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
              id="fadein_modal"
              className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60"
            >
              <div className="flex min-h-screen items-start justify-center px-4">
                <Dialog.Panel className="panel animate__animated animate__fadeIn my-8 w-full max-w-6xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                  <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                    <h5 className="text-lg font-bold">Book Your Seat</h5>
                    <button
                      onClick={() => setModal9(false)}
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
                    <div>
                      {/* Body */}
                      <div className="relative pl-6 pr-6 pb-2 pt-2 flex-auto">
                        {body}
                      </div>
                      {/* Footer */}
                      {/* <div className="flex flex-col gap-2 pl-6 pr-6 pt-2 pb-2">
                        <div
                          className="flex flex-row items-center 
                        gap-4 w-full"
                        >
                          {secondaryActionLabel && (
                            <button
                              onClick={handleSecondaryAction}
                              className="btn btn-danger btn-lg"
                            >
                              {secondaryActionLabel}
                            </button>
                          )}
                          <button
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                            color="bg-rose-500"
                          >
                            {actionLabel}
                          </button>
                        </div>
                      </div> */}
                    </div>
                    <div className="mt-8 flex items-center justify-end">
                      <div className="flex flex-col gap-2 pl-6 pr-6 pt-2 pb-2">
                        <div
                          className="flex flex-row items-center 
                        gap-4 w-full"
                        >
                          {secondaryActionLabel && (
                            <button
                              onClick={handleSecondaryAction}
                              className="btn btn-danger btn-lg"
                            >
                              {secondaryActionLabel}
                            </button>
                          )}
                          <button
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                            color="bg-rose-500"
                          >
                            {actionLabel}
                          </button>
                        </div>
                      </div>
                      {/* <button
                        onClick={() => setModal9(false)}
                        type="button"
                        className="btn btn-outline-danger"
                      >
                        Discard
                      </button>
                      <button
                        onClick={() => setModal9(false)}
                        type="button"
                        className="btn btn-primary ml-3"
                      >
                        Save
                      </button> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default MainModalComponent;
