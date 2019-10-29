import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { item, onItemClick } = this.props;
    let className = "TodoItem";
    if (item.isComplete) {
      className += " TodoItem-complete";
    }
    return (
      <div onClick={onItemClick} className={className}>
        <p> {this.props.item.title} </p>
      </div>
    );
  }
}

export default TodoItem;
