import React from "react";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";

import "./style.css";

import useUsers from "./useUsers.hook";

const ListUsers = () => {
  const { response, handlePagination } = useUsers();
  return (
    <div className="list-users-container">
      <SearchBox />
      <Table data={response} handlePagination={handlePagination}/>
    </div>
  );
};

export default ListUsers;
