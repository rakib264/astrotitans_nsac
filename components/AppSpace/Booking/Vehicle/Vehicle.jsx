import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsSpeedometer, BsBatteryCharging } from "react-icons/bs";
import { CiGps, CiTempHigh } from "react-icons/ci";
// import { FaTemperatureThreeQuarters } from "react-icons/fa";
import { GiLifeBar, GiMissileLauncher } from "react-icons/gi";
import { RiMapPinRangeFill } from "react-icons/ri";

const Vehicle = () => {
  return (
    <div className="w-full h-auto px-8 py-8 md:py-16 md:px-20">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full px-3 pt-16 pb-3 mb-3 shadow-3xl shadow-primary bg-blue-950">
          <h3 className="text-4xl text-cyan-500 font bold text-center">
            Vehicle's System Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12 py-8">
            <div className="col-span-1 py-8">
              <div className="mb-5 flex items-start justify-between">
                <h5 className="text-2xl font-semibold dark:text-white-light">
                  Internal Objervances
                </h5>
              </div>
              <div className="flex flex-col space-y-5">
                <div className="flex items-center">
                  <div className="h-9 w-9">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary dark:text-white-light">
                      <BsSpeedometer className="w-6 h-6 dark:text-white" />
                    </div>
                  </div>
                  <div className="w-full flex-initial px-3">
                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                      <h6>Initial Velocity - 7.68 KM/s</h6>
                      <p className="text-xs ltr:ml-auto rtl:mr-auto">85%</p>
                    </div>
                    <div>
                      <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                        <div
                          className="relative h-full w-full rounded-full bg-gradient-to-r from-[#009ffd] to-[#2a2a72] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-danger/10 text-danger dark:bg-danger dark:text-white-light">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.5"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M13.024 14.5601C10.7142 15.484 9.5593 15.946 8.89964 15.4977C8.74324 15.3914 8.60834 15.2565 8.50206 15.1001C8.0538 14.4405 8.51575 13.2856 9.43967 10.9758C9.63673 10.4831 9.73527 10.2368 9.90474 10.0435C9.94792 9.99429 9.99429 9.94792 10.0435 9.90474C10.2368 9.73527 10.4831 9.63673 10.9758 9.43966C13.2856 8.51575 14.4405 8.0538 15.1001 8.50206C15.2565 8.60834 15.3914 8.74324 15.4977 8.89964C15.946 9.5593 15.484 10.7142 14.5601 13.024C14.363 13.5166 14.2645 13.763 14.095 13.9562C14.0518 14.0055 14.0055 14.0518 13.9562 14.095C13.763 14.2645 13.5166 14.363 13.024 14.5601Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full flex-initial px-3">
                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                      <h6>Altitude - 390.0 Km</h6>
                      <p className="text-xs ltr:ml-auto rtl:mr-auto">40%</p>
                    </div>
                    <div>
                      <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                        <div
                          className="relative h-full w-full rounded-full bg-gradient-to-r from-[#a71d31] to-[#3f0d12] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning/10 text-warning dark:bg-warning dark:text-white-light">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M2 12H22M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full flex-initial px-3">
                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                      <h6>Apogee - 404.4 Km</h6>
                      <p className="text-xs ltr:ml-auto rtl:mr-auto">30.3%</p>
                    </div>
                    <div>
                      <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                        <div
                          className="relative h-full w-full rounded-full bg-gradient-to-r from-[#fe5f75] to-[#fc9842] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning/10 text-warning dark:bg-warning dark:text-white-light">
                      <RiMapPinRangeFill className="w-6 h-6 dark:text-white" />
                    </div>
                  </div>
                  <div className="w-full flex-initial px-3">
                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                      <h6>Range to ISS - 0.02 Km</h6>
                      <p className="text-xs ltr:ml-auto rtl:mr-auto">99.3%</p>
                    </div>
                    <div>
                      <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                        <div
                          className="relative h-full w-full rounded-full bg-gradient-to-r from-[#fe5f75] to-[#fc9842] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                          style={{ width: "99%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 pt-10">
              <h5 className="text-2xl font-semibold dark:text-white-light pb-6">
                Connections
              </h5>
              <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Manual Rigs
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Connected
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    ChangeIog
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Connected
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    AirLock
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Connected
                  </h5>
                </div>

                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Wing
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-success">
                    Connected
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Power
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-warning">
                    Awaiting
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold dark:text-gray-400">
                    Station Deck Check
                  </h5>
                  <h5 className="text-lg font-semibold dark:text-warning">
                    Awaiting
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-12">
            <div className="relative col-span-1">
              <div className="circular-progress-bar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#ebedf2"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="orange"
                    strokeWidth="2"
                    strokeDasharray="44 110"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="progress-text absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-lg text-gray-300">Pressure</h3>
                    <h3 className="text-3xl text-white">2.41</h3>
                    <h3 className="text-xl text-white">psia</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-1">
              <div className="circular-progress-bar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#ebedf2"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="red"
                    strokeWidth="2"
                    strokeDasharray="44 110"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="progress-text absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-lg text-gray-300">CO2</h3>
                    <h3 className="text-3xl text-white">0.07</h3>
                    <h3 className="text-xl text-white">mmHg</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-1">
              <div className="circular-progress-bar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#ebedf2"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="blue"
                    strokeWidth="2"
                    strokeDasharray="44 110"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="progress-text absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-lg text-gray-300">Loop A</h3>
                    <h3 className="text-3xl text-white">26.53</h3>
                    <h3 className="text-xl text-white">°C</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-1">
              <div className="circular-progress-bar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#ebedf2"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="blue"
                    strokeWidth="2"
                    strokeDasharray="44 110"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="progress-text absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-lg text-gray-300">Loop B</h3>
                    <h3 className="text-3xl text-white">20.00</h3>
                    <h3 className="text-xl text-white">°C</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div>
              <img
                src="/assets/images/spaceXRocket.png"
                className="w-88 h-auto animate-pulse"
                alt="spaceX"
              />

              <h3 className="text-center dark:text-white text-3xl pb-6">
                Dragon
              </h3>
            </div>
          </div>
          <div className="w-full flex items-center justify-between dark:bg-sky-900 px-8 py-3 rounded-md">
            <div className="flex flex-col items-center justify-center gap-3 cursor-pointer">
              <BsBatteryCharging className="w-10 h-10 dark:text-white" />
              <h3 className="text-lg text-white font-bold">Power</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 cursor-pointer">
              <CiGps className="w-10 h-10 dark:text-white" />
              <h3 className="text-lg text-white font-bold">GNC</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 cursor-pointer border-b-4 border-white">
              <GiMissileLauncher className="w-16 h-16 text-orange-500 dark:text-orange-500" />
              <h3 className="text-2xl text-orange-500 font-bold pb-2">
                Launch
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 cursor-pointer">
              <GiLifeBar className="w-10 h-10 dark:text-white" />
              <h3 className="text-lg text-white font-bold">Life</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 cursor-pointer">
              <CiTempHigh className="w-10 h-10 dark:text-white" />
              <h3 className="text-lg text-white font-bold">Thermal</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
