import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TaskBoard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <div className={classes.shape}>Angular</div>
        <div className={classes.shape}>React</div>
        <div className={classes.shape}>Vue</div>
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
