import React, { Component } from 'react'

import './App.css'
import Counter from './Counter'
import { connect } from 'react-redux'

class App extends Component {
  constructor () {
    super()
  }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header" />
        <Counter />
      </div>
    )
  }
} // 添加这个函数:
function mapStateToProps (state) {
  return { count: state.count }
}
export default connect(mapStateToProps)(App)
