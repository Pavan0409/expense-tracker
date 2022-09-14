import React from "react";
import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome";
import Header from "./components/Layout/Header";
import Profile from "./components/Profile/Profile";
import { useState } from "react";
import PasscodeReset from "./components/Pages/CreatingPasscode/PasscodeReset";
import './App.css';


function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header login={isLogin} setLogin={setIsLogin} />
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/login" element={<Login setLogin={setIsLogin} />} />
        <Route exact path="/completeprofile" element={<Profile />} />
        <Route exact path="/resetpasscode" element={<PasscodeReset />} />
      </Routes>
    </>
  );
}

export default App;
