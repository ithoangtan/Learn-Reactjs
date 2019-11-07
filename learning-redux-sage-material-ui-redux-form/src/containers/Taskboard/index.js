import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import AddIcon from "@material-ui/icons/Add";

import { STATUSES } from "../../constants/index";
import { Grid, Button } from "@material-ui/core";

import TaskList from "../../components/TaskList/index";
import TaskForm from "../../components/TaskForm/index";

const listTask = [
   { id: 1, title: "Read book", description: "Read material book", status: 0 },
   {
      id: 2,
      title: "Read book1",
      description: "Read material book1",
      status: 2
   },
   { id: 3, title: "Read book2", description: "", status: 1 }
];

class TaskBoard extends Component {
   state = {
      open: false
   };

   renderBoard() {
      let xhtml = null;
      xhtml = (
         <Grid container spacing={2}>
            {/* Filter các status từ const STATUSES theo staus.value */}
            {STATUSES.map((status, index) => {
               const taskFiltered = listTask.filter(
                  task => task.status === status.value
               );
               return (
                  <TaskList
                     key={index}
                     tasks={taskFiltered}
                     status={status}
                  ></TaskList>
               );
            })}
         </Grid>
      );
      return xhtml;
   }

   handleCloseForm = () => {
      this.setState({
         open: false
      });
   };

   renderForm() {
      let xhtml = null;
      const { open } = this.state;
      xhtml = <TaskForm open={open} onClose={this.handleCloseForm}></TaskForm>;
      return xhtml;
   }

   addNewTaskOpenForm = () => {
      this.setState({
         open: true
      });
   };

   render() {
      const { classes } = this.props;
      return (
         <div className={classes.taskBoard}>
            <Button
               variant="contained"
               color="primary"
               className={classes.button}
               onClick={this.addNewTaskOpenForm}
            >
               <AddIcon /> Thêm mới công việc
            </Button>
            {this.renderBoard()}
            {this.renderForm()}
         </div>
      );
   }
}

export default withStyles(styles)(TaskBoard);
