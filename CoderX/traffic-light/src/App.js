import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import TrafficLight from "./Components/TrafficLight";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentColor: GREEN
    };
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <TrafficLight currentColor={currentColor} />

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
