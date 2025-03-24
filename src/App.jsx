import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Authentication/Login";
import UserList from "./components/Users/UserList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
