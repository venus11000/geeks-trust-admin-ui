import React from "react";
import Checkbox from "../Checkbox";
import Pagination from "./Pagination";

import "./style.css";

const Table = () => {
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
          <tr className="row">
            <td>
              <Checkbox />
            </td>
            <td>Venugopal</td>
            <td>venugopala11000@gmail.com</td>
            <td>Admin</td>
            <td>
              <button className="action-btn">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button className="action-btn delete-btn">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr className="row">
            <td>
              <Checkbox />
            </td>
            <td>Venugopal</td>
            <td>venugopala11000@gmail.com</td>
            <td>Admin</td>
            <td>
              <button className="action-btn">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button className="action-btn delete-btn">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr className="row">
            <td>
              <Checkbox />
            </td>
            <td>Venugopal</td>
            <td>venugopala11000@gmail.com</td>
            <td>Admin</td>
            <td>
              <button className="action-btn">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button className="action-btn delete-btn">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="table-footer">
        <button className="delete-selection-btn">Delete Selected</button>

        <Pagination />
      </div>
    </div>
  );
};

export default Table;
