import { useEffect, useState } from "react";
import { get } from "../../api";
import { endpoints } from "../../api/endpoints";
import usePagination from "./usePagination.hook";

const useUsers = () => {
  const [usersResponse, setUsersResponse] = useState([]);
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const response = usePagination(users, activePage);

  const filterUsers = (searchText) => {
    if (searchText) {
      const filteredData = users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchText.toLowerCase()) ||
          user.email.toLowerCase().includes(searchText.toLowerCase()) ||
          user.role.toLowerCase().includes(searchText.toLowerCase())
      );
      setUsers(filteredData);
    } else {
      setUsers(usersResponse);
    }
  };

  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  const deleteUsersBatch = (ids) =>
    setUsers(users.filter((user) => !ids.includes(user.id)));

  const handlePagination = (page) => {
    setActivePage(page);
  };

  const getUsers = async () => {
    const users = await get(endpoints.users);
    setUsersResponse(users);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    response,
    handlePagination,
    deleteUser,
    deleteUsersBatch,
    filterUsers,
  };
};

export default useUsers;
