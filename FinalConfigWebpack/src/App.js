import React from "react";
import { DatePicker, message, Button } from "antd";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    date: null
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
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
          <div className="row">
            <div className="col d-flex flex-row">
              <div className="top_bar_contact_item">
                <div className="top_bar_icon">
                  <img src="images/phone.png" alt="" />
                  +38 068 005 3570
                </div>
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img src="images/mail.png" alt="" />
                    <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
                  </div>
                  <div className="top_bar_content ml-auto">
                    <div className="top_bar_menu">
                      <ul className="standard_dropdown top_bar_dropdown">
                        <li>
                          <a href="#">
                            English<i className="fas fa-chevron-down"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="#">Italian</a>
                            </li>
                            <li>
                              <a href="#">Spanish</a>
                            </li>
                            <li>
                              <a href="#">Japanese</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            $ US dollar<i className="fas fa-chevron-down"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="#">EUR Euro</a>
                            </li>
                            <li>
                              <a href="#">GBP British Pound</a>
                            </li>
                            <li>
                              <a href="#">JPY Japanese Yen</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="top_bar_user">
                      <div className="user_icon">
                        <img src="images/user.svg" alt="" />
                        <div>
                          <a href="#">Register</a>
                        </div>
                        <div>
                          <a href="#">Sign in</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
