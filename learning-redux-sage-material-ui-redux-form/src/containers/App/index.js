import React, { Component } from "react";

import { Provider } from "react-redux";
import configStore from "../../redux/configStore.redux";

import { withStyles } from "@material-ui/core";

import styles from "./styles";
import theme from "../../commons/theme";
import { ThemeProvider } from "@material-ui/styles";
import Taskboard from "../Taskboard/index.taskBoard";

const store = configStore();

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <Taskboard />
            </ThemeProvider>
         </Provider>
      );
   }
}

export default withStyles(styles)(App);
