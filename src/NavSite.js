import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavSite extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/work-history">Work History</Link>
        </nav>
      </div>
    )
  }
}

export default NavSite
