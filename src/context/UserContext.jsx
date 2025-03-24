import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${page}`
        );
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Failed to delete user.");
    }
  };

  const refreshUsers = (id, updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      )
    );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        page,
        totalPages,
        handlePageChange,
        handleDelete,
        refreshUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
