import React, { Component } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

// import renderRoutes from './utils/renderRoutes'

import Router from './routes/Router'
import PrivateRoute from './routes/PrivateRoute'
// import { AuthUserProvider } from './utils/AuthUser'
// import AuthorizedRoute from './utils/AuthorizedRoute'
// import UnauthorizedLayout from './layouts/UnauthorizedLayout'
// import AuthorizedLayout from './layouts/AuthorizedLayout'

import 'normalize.css'
import './App.css'

class App extends Component {
  render () {
    return <Router />
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated
})

const mapDispatchToProps = {}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
