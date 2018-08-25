import React, { Component } from 'react'
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import WorkHistoryPage from './WorkHistoryPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/" component={WorkHistoryPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
