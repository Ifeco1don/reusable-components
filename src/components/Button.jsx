import React from 'react';

const Button = ({ label, onClick, variant = 'primary', disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`button ${variant === 'secondary' ? 'secondary' : ''}`}
  >
    {label}
  </button>
);

export default Button;