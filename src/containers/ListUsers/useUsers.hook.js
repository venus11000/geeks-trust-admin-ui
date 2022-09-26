import { useEffect, useState } from "react";
import { get } from "../../api";
import { endpoints } from "../../api/endpoints";
import usePagination from "./usePagination.hook";

const useUsers = () => {
  const [usersResponse, setUsersResponse] = useState([]);
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const response = usePagination(users, activePage);

  const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));

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
    deleteUser
  };
};

export default useUsers;
