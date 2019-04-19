import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import renderRoutes from './utils/renderRoutes'
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

export default App
