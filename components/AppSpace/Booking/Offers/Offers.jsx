import React from "react";
import { GoRocket } from "react-icons/go";
import { BiSolidOffer, BiHealth } from "react-icons/bi";
import { MdOutlineLocalOffer, MdOutlinePriceChange } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";

const Offers = () => {
  return (
    <div className="w-full">
      <div className="active pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 px-8 pt-8 pb-4 flex flex-col items-center justify-center bg-blue-950 text-white rounded-md cursor-pointer shadow-md shadow-primary">
            <img
              src="/assets/images/galactica.png"
              className="w-60 h-auto"
              alt="spaceX"
            />
            <h3 className="text-4xl py-6 text-cyan-900 dark:text-orange-500">
              Facilities For Single Person
            </h3>
            <div className="flex flex-col gap-4 py-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Astronaut Training
                  </h4>
                </div>
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Astronaut Training
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Stunning Views
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Spacewalks
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Sleeping Quarters
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Return to Earth
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlinePriceChange className="w-10 h-10 text-orange-500" />
                  <h4 className="text-3xl text-gray-900 dark:text-white">
                    USD 210000
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineFieldTime className="w-10 h-10 text-cyan-500" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    8 Days
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full px-8 py-6">
              <button className="btn btn-primary text-xl w-full">
                Book Now
              </button>
            </div>
          </div>
          <div className="col-span-1 px-8 pt-8 pb-4 flex flex-col items-center justify-center bg-blue-950 text-white rounded-md cursor-pointer shadow-md shadow-primary">
            <img
              src="/assets/images/spaceX.png"
              className="w-88 h-auto"
              alt="spaceX"
            />
            <h3 className="text-4xl py-6 text-cyan-900 dark:text-orange-500">
              Facilities For Single Person
            </h3>
            <div className="flex flex-col gap-4 py-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Astronaut Training
                  </h4>
                </div>
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Astronaut Training
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Stunning Views
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Culinary Experiences
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Science and Research
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineLocalOffer className="w-6 h-6 text-secondary" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    Return to Earth
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center gap-2">
                  <MdOutlinePriceChange className="w-10 h-10 text-orange-500" />
                  <h4 className="text-3xl text-gray-900 dark:text-white">
                    USD 200000
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineFieldTime className="w-10 h-10 text-cyan-500" />
                  <h4 className="text-2xl text-gray-900 dark:text-white">
                    10 Days
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full px-8 py-6">
              <button className="btn btn-primary text-xl w-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
