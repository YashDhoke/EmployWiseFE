import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "@context/UserContext";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const { refreshUsers } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!user.first_name) {
      newErrors.first_name = "First name is required.";
    }
    if (!user.last_name) {
      newErrors.last_name = "Last name is required.";
    }
    if (!user.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is invalid.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      alert("User updated successfully!");
      refreshUsers(id, user);
      navigate("/users");
    } catch (error) {
      console.error("Failed to update user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="first_name"
          >
            First Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.first_name ? "border-red-500" : ""
            }`}
            id="first_name"
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.last_name ? "border-red-500" : ""
            }`}
            id="last_name"
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
          />
          {errors.last_name && (
            <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            id="email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
