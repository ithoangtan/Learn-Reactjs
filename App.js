import React, { Component } from "react";
import Accordion from "./Accordion";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Heading">
          this is children
        </Accordion>
      </div>
    );
  }
}
