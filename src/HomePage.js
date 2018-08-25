import React, { Component } from 'react'
import NavSite from './NavSite'

class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>About Me</h1>
          <NavSite />
        </header>
        <section>
          <p>
            I was born. I lived. I took this class.
          </p>
        </section>
        <section>
          My reasons for attending Helio:
          <ul>
            <li id="num">Cheap!</li>
            <li id="num">Get better job than current</li>
            <li id="num">Class is Fun!</li>
          </ul>
        </section>
        <section>
          <ul>
            <li id="num">Reading</li>
            <li id="num">Coding</li>
            <li id="num">Gaming</li>
          </ul>
        </section>
      </div>
    )
  }
}

export default HomePage
