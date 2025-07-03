import React from 'react';

const Checkbox = ({ label, checked, onChange }) => (
  <label className="checkbox">
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span>{label}</span>
  </label>
);

export default Checkbox;