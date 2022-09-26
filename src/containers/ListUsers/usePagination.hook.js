/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const usePagination = (data = [], page = 0) => {
  const [activePage, setActivePage] = useState(0);
  const [totalDocs, setTotalDocs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [records, setRecords] = useState([]);

  const pageSize = 10;

  useEffect(() => {
    setActivePage(0);
    setTotalDocs(data.length);
    setTotalPages(Math.ceil(data.length / pageSize));
    const newRecords = data.slice(0, pageSize);
    setRecords(newRecords)
  }, [data]);

  useEffect(() => {
    setActivePage(page);
    const start = page === 0 ? 0 : page * pageSize;
    const end = page === 0 ? pageSize : (page + 1) * pageSize;
    const newRecords = data.slice(start, end);
    setRecords(newRecords)
  }, [page]);

  return {
    activePage,
    totalDocs,
    totalPages,
    records
  };
};

export default usePagination;
