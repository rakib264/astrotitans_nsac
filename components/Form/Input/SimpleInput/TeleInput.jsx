import React from "react";

const TeleInput = () => {
  return (
    <div className="panel my-2">
      <label htmlFor="fullname">Telephone</label>
      <input
        type="tel"
        placeholder="+88 - 01828124267"
        className="form-input"
        required
      />
    </div>
  );
};

export default TeleInput;
