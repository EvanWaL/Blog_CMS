import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Login from '../containers/Login'
import Home from '../containers/Home'
import Counter from '../containers/Counter'
import NotFound from '../containers/404'

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route component={Login} exact path="/login" />
        {/* <Route component={Home} exact path="/home" /> */}
        <Route component={PrivateRoute(Counter)} exact path="/counter" />
        <Route component={NotFound} exact path="/404" />
        <Redirect to="/404" />
      </Switch>
    )
  }
}
