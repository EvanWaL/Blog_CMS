import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Login from '../containers/Login'
import NotFound from '../containers/404'

import Home from '../containers/Home'
import Counter from '../containers/Counter'

import Timeline from '../components/TimeLine'

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route component={Login} exact path="/login" />
        {/* <Route component={Home} exact path="/home" /> */}
        <Route component={PrivateRoute(Counter)} exact path="/counter" />
        <Route component={PrivateRoute(Timeline)} exact path="/timeline" />
        <Route component={NotFound} exact path="/404" />
        <Redirect to="/404" />
      </Switch>
    )
  }
}
