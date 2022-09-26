import React from "react";

import "./style.css";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <button disabled className="paginate-btn">
        <i className="fa-solid fa-angles-left"></i>
      </button>
      <button disabled className="paginate-btn">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="paginate-btn active">1</button>
      <button className="paginate-btn">2</button>
      <button className="paginate-btn">3</button>
      <button className="paginate-btn">4</button>
      <button className="paginate-btn">
        <i className="fa-solid fa-angle-right"></i>
      </button>
      <button className="paginate-btn">
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
