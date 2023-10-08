import React from "react";

const PasswordInput = () => {
  return (
    <div className="panel my-2">
      <label htmlFor="fullname">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        className="form-input"
        required
      />
    </div>
  );
};

export default PasswordInput;
