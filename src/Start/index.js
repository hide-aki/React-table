import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import '../App.css';

class Start extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Link to='ex1'
            className="App-link"
          >
            Example 1
          </Link>
          <Link to='big'
            className="App-link"
          >
            Big table
          </Link>
          <Link to='sub'
            className="App-link"
          >
            Sub component
          </Link>
        </header>
      </div>
    );
  }
}

export default Start;
