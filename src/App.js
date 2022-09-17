import React from "react";
import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome";
import Header from "./components/Layout/Header";
import Profile from "./components/Profile/Profile";
import PasscodeReset from "./components/Pages/CreatingPasscode/PasscodeReset";
import "./App.css";

import DarkThemeProvider from "./components/Layout/themeProvider";
import styled from "styled-components";
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  ${
    "" /* align-items: clearInterval;
  justify-content: clearInterval; */
  }
  font-family: san-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

function App() {
  return (
    <DarkThemeProvider>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/completeprofile" element={<Profile />} />
          <Route exact path="/resetpasscode" element={<PasscodeReset />} />
        </Routes>
      </Container>
    </DarkThemeProvider>
  );
}

export default App;
