import React from "react";

const Breadcumbs = () => {
  return (
    <div>
      {/* Default */}
      <div className="panel my-6" id="default">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Default
          </h5>
        </div>
        <div className="mb-5">
          <ol className="flex font-semibold text-gray-500 dark:text-white-dark">
            <li>
              <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    opacity="0.5"
                    d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 15L12 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </li>
            <li className="before:px-1.5 before:content-['/']">
              <button type="button">Components</button>
            </li>
            <li className="before:px-1.5 before:content-['/']">
              <button className="text-black hover:text-black/70 dark:text-white-light dark:hover:text-white-light/70">
                UI Kit
              </button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcumbs;
