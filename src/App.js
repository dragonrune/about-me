import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import logo from './bleach-hero.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <title>About Me</title>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <p>
            I was born. I lived. I took this class.
          </p>
        </section>
        <section>
          My reasons for attending Helio:
          <p>
            <li id="num">Cheap!</li>
            <li id="num">Get better job than current</li>
            <li id="num">Class is Fun!</li>
          </p>
        </section>
        <section>
          <p>
            <li id="num">Reading</li>
            <li id="num">Coding</li>
            <li id="num">Gaming</li>
          </p>
        </section>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
