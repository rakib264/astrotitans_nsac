import React from "react";

const ProductCard1 = () => {
  return (
    <div>
      {/* card 1 */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold text-black">
            Card 1
          </h5>
        </div>
        <div className="mb-5 flex items-center justify-center">
          <div className="w-full max-w-[22rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4]">
            <div className="py-7 px-6">
              <div className="-mx-6 -mt-7 mb-7 h-[260px] overflow-hidden rounded-tl rounded-tr">
                <img
                  src="/assets/images/profile-28.jpeg"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mb-1.5 text-xs font-bold text-primary">
                25 Sep 2020
              </p>
              <h5 className="mb-4 text-[15px] font-bold text-[#3b3f5c]">
                How to Start a Blog in 5 Easy Steps.
              </h5>
              <p className="text-white-dark ">
                Vestibulum vestibulum tortor ut eros tincidunt, ut rutrum elit
                volutpat.
              </p>
              <div className="relative mt-6 flex justify-between pt-4 before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-[1px] before:w-[250px] before:bg-white-light">
                <div className="flex items-center font-semibold">
                  <div className="inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full mr-2 ml-2.5">
                    <span className="flex h-full w-full items-center justify-center bg-[#515365] text-white-light">
                      AG
                    </span>
                  </div>
                  <div className="text-[#515365] ">
                    Luke Ivory
                  </div>
                </div>
                <div className="flex pr-2.5 font-semibold">
                  <div className="flex items-center text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mx-1"
                    >
                      <path
                        d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        opacity="0.5"
                        d="M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    51
                  </div>
                  <div className="flex items-center text-primary">
                    <svg
                     className="h-4 w-4 mx-1"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    250
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
