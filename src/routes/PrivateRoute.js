import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

@connect(state => ({
  val: state.counter,
  authed: state.login.authed
}))
class PrivateRoute extends Component {
  render () {
    // 从父级继承过来的属性
    const { authed, val, component: Component, ...rest } = this.props
    console.log(this.props)
    debugger
    return (
      <Route
        {...rest}
        // 如果val(即state中counter的值)为真,跳转到props中的组件,否则重定向到登录路由
        render={props =>
          authed ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )
  }
}
// 组件一定要用withRouter包一下,否则会导致路由url更新,但是组件不更新
export default withRouter(PrivateRoute)
