import React from "react";

import logo from "./logo.svg";
import "./App.css";

import Main from "./PropTypes/PropTypess";
import SingleChild from "./PropTypes/SingleChildString";
import DefaulPropValues from "./PropTypes/DefaulPropValues";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <DefaulPropValues />
            <SingleChild>this is string</SingleChild>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.tsx</code> and save to reload.
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
         <Main />
      </div>
   );
}

export default App;
