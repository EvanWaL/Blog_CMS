import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import renderRoutes from './utils/renderRoutes'
import { connect } from 'react-redux'
// import { renderRoutes } from 'react-router-config'

import 'normalize.css'
import './App.css'
import routes from './routes/index.routes'

const authed = false // 如果登陆之后可以利用redux修改该值(关于redux不在我们这篇文章的讨论范围之内）
const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Switch>{renderRoutes(routes, authed, authPath)}</Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({ authed: state.login.authed })

// 在这个对象中, 属性名会成为 prop 的 names,
// 属性值应该是 action 生成器函数.
// 它们跟 `dispatch` 绑定起来.
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
