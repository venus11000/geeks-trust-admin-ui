import React from "react";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";

import "./style.css";

const ListUsers = () => {
  return (
    <div className="list-users-container">
      <SearchBox />
      <Table />
    </div>
  );
};

export default ListUsers;
