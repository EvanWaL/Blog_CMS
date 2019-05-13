import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default WrappedComponent => {
  @withRouter
  @connect(state => ({
    isAuthenticated: state.login.isAuthenticated
  }))
  class HOC extends Component {
    render () {
      console.log(this.props)
      const { isAuthenticated, history } = this.props

      if (!isAuthenticated) {
        history.push('/404')
        return null
      }

      return <WrappedComponent {...this.props} />
    }
  }

  return HOC
}
