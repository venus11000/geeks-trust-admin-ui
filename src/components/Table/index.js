import React from "react";
import Checkbox from "../Checkbox";
import Pagination from "./Pagination";

import "./style.css";
import useTable from "./useTable.hook";

const Table = ({ data, handlePagination, deleteUser, deleteUsersBatch }) => {
  const { selectedIds, handleSelection, handleSelectAll } = useTable();

  console.log(
    selectedIds,
    data,
    data?.records?.map((user) => user.id)
  );

  const handleBatchDelete = () => {
    deleteUsersBatch(selectedIds);
    handleSelectAll([]);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="row">
            <th>
              <Checkbox
                onChange={() =>
                  handleSelectAll(data?.records?.map((user) => user.id))
                }
                checked={selectedIds.length === data?.records?.length}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data?.records?.length === 0 ? (
            <tr className="row">
              <td className="no-data" colSpan="5">
                No Data...
              </td>
            </tr>
          ) : (
            data?.records?.map((user) => (
              <tr key={`user-${user.id}`} className="row">
                <td>
                  <Checkbox
                    onChange={() => handleSelection(user.id)}
                    checked={selectedIds.includes(user.id)}
                  />
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
            ))
          )}
        </tbody>
      </table>

      {data?.records?.length > 0 && (
        <div className="table-footer">
          <button
            className="delete-selection-btn"
            onClick={handleBatchDelete}
            disabled={selectedIds.length === 0}
          >
            Delete Selected
          </button>

          <Pagination
            totalPages={data.totalPages}
            activePage={data.activePage}
            handlePagination={handlePagination}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
