import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Login from '../containers/Login'
import Home from '../containers/Home'
import CounterComponent from '../containers/Counter'

const Counter = PrivateRoute(CounterComponent)

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route component={Login} exact path="/login" />
        {/* <Route component={Home} exact path="/home" /> */}
        <Route component={Counter} exact path="/counter" />
        <Redirect to="/404" />
      </Switch>
    )
  }
}
