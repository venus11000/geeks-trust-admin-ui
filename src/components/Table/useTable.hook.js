import { useState } from "react";

const useTable = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelection = (id) => {
    if (!selectedIds.includes(id)) {
      setSelectedIds([id, ...selectedIds]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    }
  };

  const handleSelectAll = (ids) => {
    if (ids.length !== selectedIds.length) {
      setSelectedIds([...ids]);
    } else {
      setSelectedIds([]);
    }
  };

  return {
    selectedIds,
    handleSelection,
    handleSelectAll,
  };
};

export default useTable;
