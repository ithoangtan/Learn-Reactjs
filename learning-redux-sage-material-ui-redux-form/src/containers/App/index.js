import React, { Component } from "react";

import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import styles from "./styles";
import theme from "../../commons/theme";
import Taskboard from "../Taskboard";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);