import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "@context/UserContext";

const UserList = () => {
  const {
    users,
    loading,
    error,
    page,
    totalPages,
    handlePageChange,
    handleDelete,
  } = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on the search query
  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-10 flex justify-center">
        Users List
      </h2>

      <div className="mb-20 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-4 mb-15"
          >
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold text-center">
              {user.first_name} {user.last_name}
            </h3>
            <p className="text-center text-gray-600">{user.email}</p>
            <div className="flex justify-center mt-4">
              <Link
                to={`/users/${user.id}/edit`}
                className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Edit
              </Link>
              <button
                className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
