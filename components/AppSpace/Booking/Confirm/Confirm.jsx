import React from "react";
import BoardingPass from "../Pass/BroadingPass";

const Confirm = () => {
  const boardingPassData = {
    passengerName: "John Doe",
    flightNumber: "ADFNMJAB8561230654957",
    departureTime: "2023-09-16 10:00 AM",
    arrivingTime: "2023-09-17 8:00 AM",
    seatNumber: "2A",
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 pb-8">
        <h3 className="text-orange-500 text-6xl font-semibold">Confirm,</h3>
        <span className="text-4xl text-white font-semibold">
          my reservation
        </span>
      </div>
      <BoardingPass {...boardingPassData} />
    </div>
  );
};

export default Confirm;
