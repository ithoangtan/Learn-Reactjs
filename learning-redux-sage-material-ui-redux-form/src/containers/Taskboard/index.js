import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import AddIcon from "@material-ui/icons/Add";

import { STATUSES } from "../../constants/index";
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@material-ui/core";

const listTask = [
  { id: 1, title: "Read book", description: "Read material book", status: 0 },
  { id: 2, title: "Read book1", description: "Read material book1", status: 2 },
  { id: 3, title: "Read book2", description: "", status: 1 }
];

class TaskBoard extends Component {
  renderBoard() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {/* Filter các status từ const STATUSES theo staus.value */}
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          );
          return (
            <Grid item md={4} xs={12} key={status.value}>
              {/* Sử dụng Box để chúng ta margin và padding các phần tử */}
              {/* Ngoài ra chúng ta cón thể css-in-js để tiến hành code xem lại ở commit css-in-js*/}
              <Box mt={1} mb={1}>
                <div className={classes.status}>{status.label}</div>
              </Box>
              <div className={classes.wrapperListTask}>
                {/* task đã được filter sẽ đổ vào Card tương ứng */}
                {taskFiltered.map(task => {
                  const { title, description, status } = task;
                  return (
                    <Card key={task.id} className={classes.card}>
                      <CardContent>
                        <Grid container justify="space-between">
                          <Grid item md={8}>
                            {/* Typography với atrribute component sẽ bao bọc giá trị của nó với tag có tên tương ứng */}
                            <Typography component="h2">{title}</Typography>
                          </Grid>
                          <Grid item md={4}>
                            {status.label}
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Button size="small"></Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
