import React from "react";

const Health = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-blue-950 w-[80%] shadow-primary rounded-lg shadow-lg">
        <div className="px-16 py-12 ">
          <div className="flex flex-col items-center justify-center pt-10">
            <div>
              <h5 className="text-2xl font-semibold dark:text-white-light pb-6">
                Health Conditions Check-up
              </h5>
              <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Radiation Exposure
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Good
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Muscle and Bone Health
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Good
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Cardiovascular Health
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Good
                  </h5>
                </div>

                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Mental Health
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Good
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Vision Changes
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Good
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Fluid Balance
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Good
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <h4 className="text-2xl text-center pt-16 dark:text-white">
            Transitions
          </h4>
          <div className="py-16 flex items-center justify-between">
            <div className="">
              <img
                src="/assets/images/health1.png"
                alt="health1"
                className="w-full h-auto"
              />
            </div>
            <div className="">
              <img
                src="/assets/images/health2.png"
                alt="health2"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
