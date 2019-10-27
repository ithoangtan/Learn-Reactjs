import React, { Component } from "react";
import classNames from "classnames";

import "./TrafficLight.css";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

export default class TrafficLight extends Component {
  render() {
    const { currentColor } = this.props;

    return (
      <div className="TrafficLight">
        {/* <div className="bulb red"> </div> */}
        <div
          className={classNames("bulb", "red", {
            active: currentColor === RED
          })}
        ></div>
        <div
          className={classNames("bulb", "green", {
            active: currentColor === GREEN
          })}
        ></div>
        <div
          className={classNames("bulb", "blue", {
            active: currentColor === ORANGE
          })}
        ></div>
      </div>
    );
  }
}
