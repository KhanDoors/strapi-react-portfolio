import React from "react";
import Portfolio from "./components/Portfolio";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
