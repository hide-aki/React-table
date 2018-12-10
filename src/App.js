import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Start from './Start';
import Example1 from './Tables/Example1';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Start} />
          <Route path="/ex1" component={Example1} />
        </div>
      </Router>
    );
  }
}

export default App;
