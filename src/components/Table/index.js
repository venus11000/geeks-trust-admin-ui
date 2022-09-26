import React from "react";
import Checkbox from "../Checkbox";
import Pagination from "./Pagination";

import "./style.css";

const Table = ({ data, handlePagination, deleteUser }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="row">
            <th>
              <Checkbox />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data?.records?.map((user) => (
            <tr key={`user-${user.id}`} className="row">
              <td>
                <Checkbox />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="action-btn">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button
                  className="action-btn delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <button className="delete-selection-btn">Delete Selected</button>

        <Pagination
          totalPages={data.totalPages}
          activePage={data.activePage}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
};

export default Table;
