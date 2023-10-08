import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const weatherData = [
  {
    date: "Aug, 20",
    Sol: 3922,
    maxTemp: -16,
    minTemp: -120,
    sunRise: "05:46",
    sunSet: "17:30",
  },
  {
    date: "Aug, 21",
    Sol: 3923,
    maxTemp: -13,
    minTemp: -109,
    sunRise: "05:46",
    sunSet: "17:30",
  },
  {
    date: "Aug, 22",
    Sol: 3924,
    maxTemp: -11,
    minTemp: -112,
    sunRise: "05:47",
    sunSet: "17:30",
  },
  {
    date: "Aug, 23",
    Sol: 3925,
    maxTemp: -13,
    minTemp: -110,
    sunRise: "05:47",
    sunSet: "17:29",
  },
  {
    date: "Aug, 24",
    Sol: 3926,
    maxTemp: -9,
    minTemp: -111,
    sunRise: "05:46",
    sunSet: "17:31",
  },
  {
    date: "Aug, 25",
    Sol: 3927,
    maxTemp: -8,
    minTemp: -112,
    sunRise: "05:47",
    sunSet: "17:30",
  },
  {
    date: "Aug, 26",
    Sol: 3928,
    maxTemp: -6,
    minTemp: -112,
    sunRise: "05:45",
    sunSet: "17:31",
  },
  {
    date: "Aug, 27",
    Sol: 3929,
    maxTemp: -7,
    minTemp: -112,
    sunRise: "05:47",
    sunSet: "17:32",
  },
  {
    date: "Aug, 28",
    Sol: 3930,
    maxTemp: -4,
    minTemp: -112,
    sunRise: "05:46",
    sunSet: "17:30",
  },
  {
    date: "Aug, 29",
    Sol: 3931,
    maxTemp: -7,
    minTemp: -113,
    sunRise: "05:47",
    sunSet: "17:30",
  },
  {
    date: "Aug, 30",
    Sol: 3932,
    maxTemp: -6,
    minTemp: -111,
    sunRise: "05:46",
    sunSet: "17:30",
  },
  {
    date: "Aug, 31",
    Sol: 3933,
    maxTemp: -13,
    minTemp: -110,
    sunRise: "05:46",
    sunSet: "17:30",
  },
];

const Weather2 = () => {
  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-3  md:grid-cols-4 gap-6">
        {weatherData?.map((data, index) => (
          <div className="w-full h-auto px-12 py-8 text-white rounded-md panel hover:bg-indigo-900">
            <div className="flex items-center justify-center w-full">
              <img
                src="/assets/images/weather.png"
                alt="weather"
                className="w-20 h-20 text-yellow-300"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center justify-between">
                <p className="text-md text-whitefont-semibold">
                  Min Temp:{"   "}
                  <span className="text-md text-orange-500 pl-1.5">
                    {data?.minTemp}
                  </span>
                </p>
                <p className="text-md text-whitefont-semibold">
                  Max Temp:{"   "}
                  <span className="text-md text-orange-500 pl-1.5">
                    {data?.maxTemp}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-md text-whitefont-semibold">
                  Sunrise:{"   "}
                  <span className="text-md text-orange-500 pl-1.5">
                    {data?.sunRise}
                  </span>
                </p>
                <p className="text-md text-whitefont-semibold">
                  Sunset:{"   "}
                  <span className="text-md text-orange-500 pl-1.5">
                    {data?.sunSet}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className='w-full h-auto px-12 py-8 bg-gray-900 text-white'>
        <div className='flex items-center justify-center w-full'>
            <TiWeatherPartlySunny className='w-20 h-20 text-white' />
        </div>
        <div>
            <div>
                <p>{data?.maxTemp}</p>
            </div>
        </div>
      </div> */}
    </div>
  );
};

export default Weather2;
