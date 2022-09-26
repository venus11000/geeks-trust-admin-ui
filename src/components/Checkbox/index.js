import React from "react";

import "./style.css";

const Checkbox = ({ onChange = () => {}, checked = false }) => {
  return (
    <input
      className="checkbox"
      type="checkbox"
      onChange={onChange}
      value={checked}
    />
  );
};

export default Checkbox;
