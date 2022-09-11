import React from "react";
import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome";
import Header from "./components/Layout/Header";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/completeprofile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
