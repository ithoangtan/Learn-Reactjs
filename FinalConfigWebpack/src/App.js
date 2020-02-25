import React from "react";
import { DatePicker, message, Button } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee); //Để sử dụng lại ở đâu đó mà không cần phải import lại
// đơn giản chỉ cần:  <FontAwesomeIcon icon="check-square" />

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

class App extends React.Component {
  state = {
    date: null
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
    console.log("a");
  };
  render() {
    const { date } = this.state;
    return (
      <>
        <Button type="primary">Primary</Button>
        <div style={{ width: 400, margin: "100px auto" }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
          </div>
        </div>
        <div className="container">
          <div className="alert alert-primary" role="alert">
            <FontAwesomeIcon icon={faCoffee} /> A simple primary alert—check it
            out!
          </div>
          <div className="alert alert-secondary" role="alert">
            <FontAwesomeIcon icon={["fab", "apple"]} /> A simple secondary
            alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            <FontAwesomeIcon icon="check-square" /> A simple success alert—check
            it out!
          </div>
        </div>
      </>
    );
  }
}

export default App;
