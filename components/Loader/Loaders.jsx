import React from "react";

const Loaders = () => {
  return (
    <div className="panel my-6">
      {/* Position */}
      <div className="panel" id="positions">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Position
          </h5>
        </div>
        <div className="mb-5">
          <div className="flex w-full flex-wrap">
            <div className="mb-3 flex w-full flex-wrap items-center justify-center text-center sm:mb-0 sm:w-1/2">
              <p className="mb-2 w-full">Default Button</p>
              <button type="button" className="btn btn-primary btn-lg">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block h-5 w-5 shrink-0 animate-[spin_2s_linear_infinite] align-middle mr-2"
                >
                  <line x1="12" y1="2" x2="12" y2="6"></line>
                  <line x1="12" y1="18" x2="12" y2="22"></line>
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                  <line x1="2" y1="12" x2="6" y2="12"></line>
                  <line x1="18" y1="12" x2="22" y2="12"></line>
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
                Loading
              </button>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center text-center sm:w-1/2">
              <p className="mb-2 w-full">Outline Button</p>
              <button type="button" className="btn btn-outline-primary btn-lg">
                Loading
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block h-5 w-5 shrink-0 animate-[spin_2s_linear_infinite] align-middle ml-2"
                >
                  <line x1="12" y1="2" x2="12" y2="6"></line>
                  <line x1="12" y1="18" x2="12" y2="22"></line>
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                  <line x1="2" y1="12" x2="6" y2="12"></line>
                  <line x1="18" y1="12" x2="22" y2="12"></line>
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Custom */}
      <div className="panel" id="custom">
        <div className="mb-10 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Custom
          </h5>
        </div>
        <div className="mb-5">
          <div className="grid w-full grid-cols-3 gap-4">
            <span className="m-auto mb-10 inline-block h-14 w-14 animate-spin rounded-full border-8 border-[#f1f2f3] border-l-primary align-middle"></span>
            <span className="m-auto mb-10 inline-block h-14 w-14 animate-[spin_2s_linear_infinite] rounded-full border-8 border-[#f1f2f3] border-l-primary border-r-primary align-middle"></span>
            <span className="m-auto mb-10 inline-block h-14 w-14 animate-[spin_3s_linear_infinite] rounded-full border-8 border-r-warning border-l-primary border-t-danger border-b-success align-middle"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loaders;
