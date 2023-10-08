import React from "react";

const HorizontalCard1 = () => {
  return (
    <div>
      {/* card 3 */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold text-black">
            Card 3
          </h5>
        </div>
        <div className="mb-5 flex items-center justify-center">
          <div className="w-full max-w-[30rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4]">
            <div className="flex flex-col items-center p-5 sm:flex-row">
              <div className="mb-5 h-20 w-20 overflow-hidden rounded-full">
                <img
                  src="/assets/images/profile-34.jpeg"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-center sm:text-left mx-5">
                <h5 className="mb-2 text-[15px] font-semibold text-[#3b3f5c]">
                  Luke Ivory
                </h5>
                <p className="mb-2 text-white-dark">Manager</p>
                <span className="badge rounded-full bg-primary">4.5</span>
                <p className="mt-4 font-semibold text-white-dark sm:mt-8">
                  Maecenas nec mi vel lacus condimentum rhoncus dignissim
                  egestas orci. Integer blandit porta placerat. Vestibulum in
                  ultricies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard1;
