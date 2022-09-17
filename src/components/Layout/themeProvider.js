import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "light" : "dark" }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
