import React from "react";

const UrlInput = () => {
  return (
    <div className="panel my-2">
      <label htmlFor="fullname">Url</label>
      <input
        type="url"
        placeholder="https://dummyurl.com"
        className="form-input"
        required
      />
    </div>
  );
};

export default UrlInput;
