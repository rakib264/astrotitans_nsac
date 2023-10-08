import React from "react";

const Progressbar = () => {
  return (
    <div className="panel my-6 flex flex-col gap-4">
      <div className="panel" id="animated">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Animated
          </h5>
        </div>
        <div className="mb-5 space-y-5">
          <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
            <div
              className="animated-progress h-4 w-6/12 rounded-full bg-primary"
              style={{
                backgroundImage:
                  "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",
                backgroundSize: "1rem 1rem",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="panel" id="sizes">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Progress Bars Different Sizes
          </h5>
        </div>
        <div className="mb-5 space-y-5">
          <div className="space-y-1">
            <h3 className="text-primary">Default Progress Bar Size</h3>
            <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
              <div className="h-4 w-3/12 rounded-full rounded-bl-full bg-primary text-center text-xs text-white"></div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-base text-success">Progress-sm</h3>
            <div className="flex h-1 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
              <div className="h-1 w-5/12 rounded-full rounded-bl-full bg-success text-center text-xs text-white"></div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-base text-warning">Progress-md</h3>
            <div className="flex h-2.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
              <div className="h-2.5 w-7/12 rounded-full rounded-bl-full bg-warning text-center text-xs text-white"></div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-base text-info">Progress-lg</h3>
            <div className="flex h-5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
              <div className="h-5 w-8/12 rounded-full rounded-bl-full bg-info text-center text-xs text-white"></div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-base text-danger">Progress-xl</h3>
            <div className="flex h-6 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
              <div className="h-6 w-10/12 rounded-full rounded-bl-full bg-danger text-center text-xs text-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
