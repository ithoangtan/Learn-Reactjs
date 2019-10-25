import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./Components/TodoItem";

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.todoItems = ["go to market", "learn UI/UX"];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.todoItems.map((item, index) => (
            <TodoItem key={index} title={item} />
          ))}
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
