import React, { Component } from 'react';
import logo from './logo.svg';
import "./reset.css";
import './App.css';
import Header from "./Components/Header/Header.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import {HashRouter, Link, Switch, Route} from "react-router-dom";
import routes from "./routes.js";

import Wizard from "./Components/Wizard/Wizard.js";

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <HashRouter>
        <div className="App">
          <Header></Header>
          {routes}
        </div>
      </HashRouter>
      
    );
  }

}

export default App;
