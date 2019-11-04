import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <p> Hello redux-saga</p>
        <Button variant="contained" color="primary">
          Material Button
        </Button>
        <div className={classes.box}>
          <div className={classes.shape}>Angular</div>
          <div className={classes.shape}>React</div>
          <div className={classes.shape}>Vue</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
