import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Authentication/Login";
import UserList from "./components/Users/UserList";
import EditUser from "./components/Users/EditUser";
import { UserProvider } from "@context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
