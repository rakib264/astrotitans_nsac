import React from "react";

const NumberInput = () => {
  return (
    <div className="panel my-2">
      <label htmlFor="fullname">Number</label>
      <input
        type="number"
        className="form-input"
        min="0"
        max="100"
        placeholder="Type a number"
      />
    </div>
  );
};

export default NumberInput;
