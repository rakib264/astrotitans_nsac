import React, { useState } from "react";

const Touchspin = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
  return (
    <div className="flex items-center gap-6">
      {/* Inline Buttons */}
      <div className="panel" id="inline_buttons">
        <div className="mb-5">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Inline spin button
          </h5>
        </div>
        <div className="mb-5">
          <div className="mb-5">
            <div className="inline-flex">
              <button
                type="button"
                className="flex items-center justify-center border border-r-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-l-md rtl:rounded-r-md"
                onClick={() => setValue1(value1 > 0 ? value1 - 1 : 0)}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <input
                type="number"
                placeholder="55"
                className="form-input rounded-none text-center"
                min="0"
                max="25"
                readOnly
                value={value1}
              />
              <button
                type="button"
                className="flex items-center justify-center border border-l-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-r-md rtl:rounded-l-md"
                onClick={() => setValue1(value1 < 100 ? value1 + 1 : 100)}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Buttons */}
      <div className="panel" id="vertical_buttons">
        <div className="mb-5">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Vertical spin button
          </h5>
        </div>
        <div className="mb-5">
          <div className="mb-5">
            <div className="inline-flex w-[50px] flex-col">
              <button
                type="button"
                className="flex items-center justify-center rounded-t-md border border-b-0 border-primary bg-primary p-3 font-semibold text-white"
                onClick={() => setValue2(value2 > 0 ? value2 - 1 : 0)}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <input
                type="text"
                placeholder="55"
                className="form-input rounded-none px-2 text-center"
                min="0"
                max="25"
                readOnly
                value={value2}
              />
              <button
                type="button"
                className="flex items-center justify-center rounded-b-md border border-t-0 border-primary bg-primary p-3 font-semibold text-white"
                onClick={() => setValue2(value2 < 100 ? value2 + 1 : 100)}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touchspin;
