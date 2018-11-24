import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='../img/logo/logo_white.png' className="logo" alt="logo" />
          <br/>
          <h6   className="red-text text-accent-2">
          event management - fashion design - creative services -  video production
          </h6>
          <br/>
          <a
            className=" btn"
            href="https://facebook.com/realromphotos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Under construction
          </a>
        </header>
      </div>
    );
  }
}

export default App;
