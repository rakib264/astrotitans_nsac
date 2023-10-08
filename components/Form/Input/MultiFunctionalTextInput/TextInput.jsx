import React from "react";

const TextInput = ({ id, label, type, register, placeholder, errors }) => {
  return (
    <div className="py-2.5">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...register(id, {
          required: `${label} is required`,
        })}
        type={type}
        placeholder={placeholder}
        className="form-input"
      />
      {errors[id] && (
        <div className="py-2 text-rose-400 text-sm font-semibold">
          {errors[id]?.message}
        </div>
      )}
    </div>
  );
};

export default TextInput;
