import React, { Component } from 'react'
import { Switch, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import routes from './routes/index.routes'
import renderRoutes from './utils/renderRoutes'

import 'normalize.css'
import './App.css'

const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置

class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>{renderRoutes(routes, this.props.authed, authPath)}</Switch>
        {/* <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/counter" render={() => <div>Miss</div>} />
        </Switch> */}
      </div>
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
