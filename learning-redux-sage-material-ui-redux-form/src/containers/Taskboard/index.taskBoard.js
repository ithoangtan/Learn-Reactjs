import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import AddIcon from "@material-ui/icons/Add";

import { STATUSES } from "../../constants/index.constants";
import { Grid, Button } from "@material-ui/core";

import TaskList from "../../components/TaskList/index";
import TaskForm from "../../components/TaskForm/index";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task.actions";

class TaskBoard extends Component {
   state = {
      open: false
   };

   componentDidMount() {
      const { taskAllActions } = this.props;
      const { fetchListTaskRequest } = taskAllActions;
      fetchListTaskRequest();
   }

   renderBoard() {
      const { listTask } = this.props;
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

TaskBoard.propTypes = {
   classes: PropTypes.object,
   taskAllActions: PropTypes.shape({
      fetchListTaskRequest: PropTypes.func
   }),
   listTask: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listTask: state.task.listTask
   };
};
const mapDispatchToProps = dispatch => {
   return {
      taskAllActions: bindActionCreators(taskActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là taskActions ở bên task.action.js
   };
};
export default withStyles(styles)(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(TaskBoard)
);
