"use client";
import React from "react";

const BasicImageTimeline = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
      {/* with images */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            With Images
          </h5>
        </div>
        <div className="mb-5">
          <div className="mx-auto max-w-[900px] space-y-3 text-center sm:space-y-0 ltr:sm:text-left rtl:sm:text-right">
            <div className="items-center sm:flex">
              <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">
                09:00
              </p>
              <div className="relative p-2.5 after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-white-dark/20">
                <img
                  src="/assets/images/profile-16.jpeg"
                  alt="img"
                  className="relative z-[1] mx-auto h-11 w-11 rounded-full"
                />
              </div>
              <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">
                25 mins ago
              </p>
              <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">
                Conference call with Marketing Manager.
              </p>
            </div>
            <div className="items-center sm:flex">
              <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">
                10:00
              </p>
              <div className="relative p-2.5 after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-white-dark/20">
                <img
                  src="/assets/images/profile-1.jpeg"
                  alt="img"
                  className="relative z-[1] mx-auto h-11 w-11 rounded-full"
                />
              </div>
              <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">
                2 hrs ago
              </p>
              <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">
                Server rebooted successfully
              </p>
            </div>
            <div className="items-center sm:flex">
              <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">
                11:00
              </p>
              <div className="relative p-2.5 after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-white-dark/20">
                <img
                  src="/assets/images/profile-2.jpeg"
                  alt="img"
                  className="relative z-[1] mx-auto h-11 w-11 rounded-full"
                />
              </div>
              <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">
                4 hrs ago
              </p>
              <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">
                Backup Files EOD
              </p>
            </div>
            <div className="items-center sm:flex">
              <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">
                12:00
              </p>
              <div className="relative p-2.5 after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-white-dark/20">
                <img
                  src="/assets/images/profile-3.jpeg"
                  alt="img"
                  className="relative z-[1] mx-auto h-11 w-11 rounded-full"
                />
              </div>
              <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">
                6 hrs ago
              </p>
              <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">
                Collected documents from Sara
              </p>
            </div>
            <div className="items-center sm:flex">
              <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">
                01:00
              </p>
              <div className="relative p-2.5">
                <img
                  src="/assets/images/profile-4.jpeg"
                  alt="img"
                  className="relative z-[1] mx-auto h-11 w-11 rounded-full"
                />
              </div>
              <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">
                9 hrs ago
              </p>
              <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">
                PDF file Download
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicImageTimeline;
