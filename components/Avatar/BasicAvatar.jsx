import React from "react";

const BasicAvatar = () => {
  return (
    <div>
      {/* Basic */}
      <div className="panel my-6" id="basic">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">Basic Avatars</h5>
        </div>
        <div className="mb-5 flex items-center justify-center gap-4">
            {/* Avatar One */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <img
              className="h-20 w-20 overflow-hidden rounded-full object-cover"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
          </div>
          {/* Avatar Two */}
          <span className="relative h-20 w-20">
            <img
              className="h-20 w-20 overflow-hidden p-0.5 ring-1 ring-cyan-400 rounded-full object-cover"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
            <span className="absolute bottom-0 h-7 w-7 rounded-full bg-secondary ring-2 ring-white right-0 dark:ring-white-dark"></span>
          </span>
          {/* Avatar Three */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <img
              className="h-20 w-20 overflow-hidden p-0.5 ring-1 ring-cyan-400 rounded-md object-cover"
              src="/assets/images/profile-12.jpeg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicAvatar;
