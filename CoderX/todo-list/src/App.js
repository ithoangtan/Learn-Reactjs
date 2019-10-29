import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./Components/TodoItem";

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { title: "go to market", isComplete: true },
        { title: "go to market", isComplete: true },
        { title: "learn UI/UX" }
      ]
    };
  }

  onItemClicked(item) {
    return event => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {todoItems.length &&
            todoItems.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                onItemClick={this.onItemClicked(item)}
              />
            ))}
          {/* {this.todoItems.length === 0 && "Nothing here!!!"} */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
