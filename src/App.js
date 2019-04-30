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

import Home from './containers/Home'
import Login from './containers/Login'
import Counter from './containers/Counter'

import 'normalize.css'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        {/* <AuthUserProvider> */}
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/counter" component={Counter} />
          {/* <Route path="/404" component={UnauthorizedLayout} /> */}
          <Redirect to="/404" />
        </Switch>
        {/* </AuthUserProvider> */}
      </Router>
    )
  }
}

const mapStateToProps = state => ({ authed: state.login.authed })

const mapDispatchToProps = {}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
