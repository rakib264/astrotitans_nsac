// import React from "react";
// import "./styles.css";

// const BroadingPass = () => {
//   return (
//     <div>
//       <div class="ticket">
//         <header>
//           <div class="company-name">American Airlines</div>
//           <div class="gate">
//             <div>Gate</div>
//             <div>B4</div>
//           </div>
//         </header>
//         <section class="airports">
//           <div class="airport">
//             <div class="airport-name">Charlotte</div>
//             <div class="airport-code">CLT</div>
//             <div class="dep-arr-label">Departing</div>
//             <div class="time">7:45am</div>
//           </div>
//           <div class="airport">
//             <div class="airport-name">Tampa</div>
//             <div class="airport-code">TPA</div>
//             <div class="dep-arr-label">Arriving</div>
//             <div class="time">9:15am</div>
//           </div>
//         </section>
//         <section class="place">
//           <div class="place-block">
//             <div class="place-label">Group</div>
//             <div class="place-value">2</div>
//           </div>
//           <div class="place-block">
//             <div class="place-label">Seat</div>
//             <div class="place-value">2A</div>
//           </div>
//           <div class="place-block">
//             <div class="place-label">Term</div>
//             <div class="place-value">B</div>
//           </div>
//           <div class="qr">
//             <img src="http://www.classtools.net/QR/pics/qr.png" />
//           </div>
//         </section>
//       </div>
//       {/* <div class="ticket inverse">
//         <header>
//           <div class="company-name">American Airlines</div>
//           <div class="gate">
//             <div>Gate</div>
//             <div>B4</div>
//           </div>
//         </header>
//         <section class="airports">
//           <div class="airport">
//             <div class="airport-name">Charlotte</div>
//             <div class="airport-code">CLT</div>
//             <div class="dep-arr-label">Departing</div>
//             <div class="time">7:45am</div>
//           </div>
//           <div class="airport">
//             <div class="airport-name">Tampa</div>
//             <div class="airport-code">TPA</div>
//             <div class="dep-arr-label">Arriving</div>
//             <div class="time">9:15am</div>
//           </div>
//         </section>
//         <section class="place">
//           <div class="place-block">
//             <div class="place-label">Group</div>
//             <div class="place-value">2</div>
//           </div>
//           <div class="place-block">
//             <div class="place-label">Seat</div>
//             <div class="place-value">2A</div>
//           </div>
//           <div class="place-block">
//             <div class="place-label">Term</div>
//             <div class="place-value">B</div>
//           </div>
//           <div class="qr">
//             <img src="http://www.classtools.net/QR/pics/qr.png" />
//           </div>
//         </section>
//       </div> */}
//     </div>
//   );
// };

// export default BroadingPass;

// HorizontalBoardingPass.js
import React from "react";
import Barcode from "react-barcode";
import { BsRocketTakeoff } from "react-icons/bs";

const BoardingPass = ({
  passengerName,
  flightNumber,
  departureTime,
  arrivingTime,
  seatNumber,
}) => {
  return (
    <div className="h-auto w-full mx-auto">
      <div className="bg-blue-950 shadow-primary bg-opacity-90 w-4/5 mx-auto p-6 rounded-lg shadow-lg ">
        <div className="pb-3">
          <img
            src="/assets/images/galactica.png"
            alt="Company Logo"
            className="w-32 mx-auto"
          />
        </div>
        <h2 className="text-3xl font-semibold mt-4 text-center">
          Boarding Pass
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <img
              src="/assets/images/earthIcon.png"
              className="w-8 h-8 shadow-lg shadow-cyan-500 rounded-md"
              alt="earthIcon"
            />
            <h3 className="text-gray-900 dark:text-white text-lg">Earth</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-20 h-1 text-gray-900 dark:text-gray-400">
              ------------------
            </div>
            <div className="px-3">
              <BsRocketTakeoff className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <div className="w-20 h-1 text-gray-900 dark:text-gray-400">
              -----------------
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="/assets/images/marsIcon.png"
              className="w-8 h-8 shadow-lg shadow-orange-500 rounded-md"
              alt="marsIcon"
            />
            <h3 className="text-gray-900 dark:text-white text-lg">Mars</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="col-span-1">
                <p className="text-lg dark:text-gray-300">Passenger Name:</p>
                <p className="text-xl dark:text-white font-semibold">
                  {passengerName}
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-lg dark:text-gray-300">Flight:</p>
                <p className="text-xl dark:text-white font-semibold">
                  {flightNumber}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="mt-4 col-span-1">
                <p className="text-lg dark:text-gray-300">Departure Time:</p>
                <p className="text-xl dark:text-white font-semibold">
                  {departureTime}
                </p>
              </div>
              <div className="mt-4 col-span-1">
                <p className="text-lg dark:text-gray-300">Arrival Time:</p>
                <p className="text-xl dark:text-white font-semibold">
                  {arrivingTime}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="mt-4 col-span-1">
                <p className="text-lg dark:text-gray-300">Seat Number:</p>
                <p className="text-xl dark:text-white font-semibold">
                  {seatNumber}
                </p>
              </div>
              <div className="mt-4 col-span-1">
                <p className="text-lg dark:text-gray-300">Gate Number</p>
                <p className="text-xl dark:text-white font-semibold">H22</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 px-16">
            <Barcode className="w-full" value={flightNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
