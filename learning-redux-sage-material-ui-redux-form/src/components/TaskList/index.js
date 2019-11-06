import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./styles";
import { Grid, Box } from "@material-ui/core";
import TaskItem from "../TaskItem";

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        {/* Sử dụng Box để chúng ta margin và padding các phần tử */}
        {/* Ngoài ra chúng ta cón thể css-in-js để tiến hành code xem lại ở commit css-in-js*/}
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {/* task đã được filter sẽ đổ vào Card tương ứng */}
          {tasks.map((task, index) => {
            return (
              <TaskItem key={index} status={status} task={task}></TaskItem>
            );
          })}
        </div>
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskList);
