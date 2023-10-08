import React from "react";
import CountUp from "react-countup";

const SimpleCounter = () => {
  return (
    <div>
      {/* Simple Counter */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white">Simple Counter</h5>
        </div>
        <div className="mx-auto mb-5 grid max-w-[900px] grid-cols-3 justify-items-center gap-3">
          <div>
            <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] sm:h-[100px] sm:w-[100px]">
              <CountUp
                start={0}
                end={710}
                duration={7}
                className="text-center text-xl text-primary sm:text-3xl"
              ></CountUp>
            </div>
            <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c]  sm:text-[15px]">
              HOURS
            </h4>
          </div>
          <div>
            <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] sm:h-[100px] sm:w-[100px]">
              <CountUp
                start={0}
                end={915}
                duration={7}
                className="text-center text-xl text-primary sm:text-3xl"
              ></CountUp>
            </div>
            <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c]">
              TICKETS
            </h4>
          </div>
          <div>
            <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] sm:h-[100px] sm:w-[100px]">
              <CountUp
                start={0}
                end={580}
                duration={7}
                className="text-center text-xl text-primary sm:text-3xl"
              ></CountUp>
            </div>
            <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] sm:text-[15px]">
              CUSTOMERS
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCounter;
