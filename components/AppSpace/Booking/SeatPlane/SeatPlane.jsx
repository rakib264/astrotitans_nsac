import React from "react";
import "./styles.css";

const SeatPlane = () => {
  return (
    <div classNameName="panel">
      <div className="plane relative animate-pulse scale-125">
        <img
          src="/assets/images/plane.png"
          className="w-[500px] h-auto absolute bottom-[200px] left-0 z-10"
          alt="unbooked"
        />
        <div className="cockpit z-30">
          <h1 className="text-3xl text-gray-900 text-center">Book</h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 flex flex-col items-center justify-center gap-2">
              <img
                src="/assets/images/booked.png"
                className="w-1/2 h-auto"
                alt="unbooked"
              />
              <h3 className="text-2xl dark:text-gray-900">Booked</h3>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center gap-2">
              <img
                src="/assets/images/unbooked.png"
                className="w-1/2 h-auto"
                alt="unbooked"
              />
              <h3 className="text-2xl dark:text-gray-900">Unbooked</h3>
            </div>
          </div>
        </div>
        <div className="exit exit--front fuselage"></div>
        <ol className="cabin fuselage">
          <li className="row row--1">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="1A" />
                <label for="1A">1A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1B" />
                <label for="1B">1B</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1C" />
                <label for="1C">1C</label>
              </li>
              <li className="seat">
                <input type="checkbox" disabled id="1D" />
                <label for="1D">Occupied</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1E" />
                <label for="1E">1E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1F" />
                <label for="1F">1F</label>
              </li>
            </ol>
          </li>
          <li className="row row--2">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="2A" />
                <label for="2A">2A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2B" />
                <label for="2B">2B</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2C" />
                <label for="2C">2C</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2D" />
                <label for="2D">2D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2E" />
                <label for="2E">2E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2F" />
                <label for="2F">2F</label>
              </li>
            </ol>
          </li>
        </ol>
        <div className="exit exit--back fuselage"></div>
      </div>
    </div>
  );
};

export default SeatPlane;
