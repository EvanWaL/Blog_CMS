import React, { Component } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import routes from './routes/index.routes'
// import renderRoutes from './utils/renderRoutes'
import { renderRoutes } from 'react-router-config'

import Router from './utils/Router'
import { AuthUserProvider } from './utils/AuthUser'
import AuthorizedRoute from './utils/AuthorizedRoute'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import AuthorizedLayout from './layouts/AuthorizedLayout'

import 'normalize.css'
import './App.css'

const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置

class App extends Component {
  render () {
    return (
      <Router>
        <AuthUserProvider>
          <Switch>
            <Route path="/login" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/counter" component={AuthorizedLayout} />
            {/* <Redirect to="/counter" /> */}
          </Switch>
        </AuthUserProvider>
      </Router>
    )
  }
}

const mapStateToProps = state => ({ authed: state.login.authed })

// 在这个对象中, 属性名会成为 prop 的 names,
// 属性值应该是 action 生成器函数.
// 它们跟 `dispatch` 绑定起来.
const mapDispatchToProps = {}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
