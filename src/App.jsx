import React from "react";
import Router from "./shared/Router";
import { ThemeProvider } from "styled-components";
import theme from "./shared/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
