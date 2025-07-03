import React from 'react';

const Input = ({ label, type = "text", value, onChange, placeholder }) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  </div>
);

export default Input;