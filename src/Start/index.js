import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Start extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
          >
            Learn React-table
          </a>
        </header>
      </div>
    );
  }
}

export default Start;
