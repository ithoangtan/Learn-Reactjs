import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import styles from "./styles";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField
} from "@material-ui/core";

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Thêm các TextField vào để nhập liệu - như docs */}
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
            />
            {/* Multiline TextField - như docs */}
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              rowsMax="4"
              //   value={value}
              //   onChange={handleChange}
              className={classes.textField}
              margin="normal"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancle
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(TaskForm);
