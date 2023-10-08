import React from "react";

const SimpleTextInput = () => {
  return (
    <div className="panel my-2">
      <label htmlFor="fullname">Name</label>
      <input
        type="text"
        placeholder="Type your name"
        className="form-input"
        required
      />
    </div>
  );
};

export default SimpleTextInput;

