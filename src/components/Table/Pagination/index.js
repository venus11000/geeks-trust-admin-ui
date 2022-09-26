import React from "react";

import "./style.css";

const Pagination = ({ totalPages = 0, activePage, handlePagination }) => {
  return (
    <div className="pagination-container">
      <button
        className="paginate-btn"
        onClick={() => handlePagination(0)}
        disabled={activePage === 0}
      >
        <i className="fa-solid fa-angles-left"></i>
      </button>
      <button
        className="paginate-btn"
        onClick={() => handlePagination(activePage - 1)}
        disabled={activePage === 0}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      {Array(totalPages)
        .fill(null)
        .map((_, i) => (
          <button
            className={`paginate-btn ${activePage === i ? "active" : ""}`}
            onClick={() => handlePagination(i)}
          >
            {i + 1}
          </button>
        ))}
      <button
        className="paginate-btn"
        onClick={() => handlePagination(activePage + 1)}
        disabled={activePage === totalPages}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
      <button
        className="paginate-btn"
        onClick={() => handlePagination(totalPages - 1)}
        disabled={activePage === totalPages}
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
