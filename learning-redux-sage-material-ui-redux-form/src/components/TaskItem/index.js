import React, { Component } from "react";
import { withStyles, Icon } from "@material-ui/core";
import styles from "./styles";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Fab
} from "@material-ui/core";

class TaskItem extends Component {
  render() {
    const { classes, status, task } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              {/* Typography với atrribute component sẽ bao bọc giá trị của nó với tag có tên tương ứng */}
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p> {task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            size="small"
            className={classes.fab}
          >
            <Icon fontSize="small">edit</Icon>
          </Fab>
          <Fab
            color="primary"
            aria-label="Edit"
            size="small"
            className={classes.fab}
          >
            <Icon fontSize="small">delete</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(TaskItem);
