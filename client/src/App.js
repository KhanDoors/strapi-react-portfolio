import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import { Route, Link, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import theme from "./theme";
import Navbar from "./components/layouts/Navbar";
import DarkModeToggle from "./components/layouts/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#131A40",
      },
      secondary: {
        main: "#355B8C",
      },
      type: darkMode ? "dark" : "light",
    },
  });

  const greetParent = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <DarkModeToggle greetHandler={greetParent} />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
