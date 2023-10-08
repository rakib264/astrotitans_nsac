import React from "react";

const AnimatedAvatars = () => {
  return (
    <div className="panel my-6">
      {/* Animate X-axis */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Animate X-axis
          </h5>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
            <img
              className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
            <img
              className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
            <img
              className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark">
              AG
            </span>
          </div>
        </div>
      </div>
      {/* Animate Y-axis */}
      <div className="panel" id="animate">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Animate Y-axis
          </h5>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
            <img
              className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:hover:translate-y-2 dark:ring-white-dark"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
            <img
              className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:hover:translate-y-2 dark:ring-white-dark"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
            <img
              className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:hover:translate-y-2 dark:ring-white-dark"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white transition-all duration-300 hover:hover:translate-y-2 dark:ring-white-dark">
              AG
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAvatars;
