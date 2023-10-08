import React from "react";

const EmailInput = () => {
  return (
    <div className="panel my-2">
      <label htmlFor="fullname">E-mail</label>
      <input
        type="email"
        placeholder="email@mail.com"
        className="form-input"
        required
      />
    </div>
  );
};

export default EmailInput;
