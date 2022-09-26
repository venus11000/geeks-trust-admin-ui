/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import "./style.css";

const SearchBox = () => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search by name, email and role"
      />
    </div>
  );
};

export default SearchBox;
