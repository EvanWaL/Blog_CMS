import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default WrappedComponent => {
  @withRouter
  @connect(state => ({
    val: state.counter,
    isAuthenticated: state.login.isAuthenticated
  }))
  class HOC extends Component {
    render () {
      console.log(this.props)
      const { isAuthenticated } = this.props

      // const isAuthenticated = JSON.parse(
      //   sessionStorage.getItem('isAuthenticated')
      // )

      if (!isAuthenticated) {
        // history.push('/login')
        return null
      }

      return <WrappedComponent {...this.props} />
    }
  }

  return HOC
}
// export default WrappedComponent => authGuard(WrappedComponent)
