import React from 'react'
import { increment, decrement } from './actions'

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.dispatch(increment())
    // << 在这使用
  }
  decrement = () => {
    this.props.dispatch(decrement())
  }

  render () {
    return <div />
  }
}
