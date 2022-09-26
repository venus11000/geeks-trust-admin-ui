/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useDebounce from "../../utils/useDebounce";

import "./style.css";

const SearchBox = ({ handleSearchChange = () => {} }) => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText, 300);

  const handleChange = (event) => setSearchText(event.target.value);

  useEffect(() => {
    handleSearchChange(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search by name, email and role"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
};

export default SearchBox;
