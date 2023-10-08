import React from "react";

const Paginations = () => {
  return (
    <div className="panel my-6 flex flex-col gap-4 panel">
      <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
           Paginations
          </h5>
        </div>
      <div className="flex w-full flex-col justify-center">
        <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              Prev
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              1
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light"
            >
              2
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              3
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              Next
            </button>
          </li>
        </ul>
      </div>

      <div className="flex w-full flex-col justify-center">
        <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path
                  d="M15 5L9 12L15 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              1
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light"
            >
              2
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              3
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rtl:rotate-180"
              >
                <path
                  d="M9 5L15 12L9 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <div className="flex w-full flex-col justify-center">
        <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
          <li>
            <button
              type="button"
              className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path
                  d="M15 5L9 12L15 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              1
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded-full bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light"
            >
              2
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              3
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rtl:rotate-180"
              >
                <path
                  d="M9 5L15 12L9 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Paginations;
