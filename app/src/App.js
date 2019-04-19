import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import './App.css'
import Counter from './Counter'
import Login from './containers/Login'
import Home from './containers/Home'

class App extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: sessionStorage.getItem('token')
    }
  }
  render () {
    return (
      <Router>
        <div className="App">
          <header className="App-header" />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                !this.state.loggedIn ? <Redirect to="/login" /> : <Home />
              }
            />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
