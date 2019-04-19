import React, { Component } from 'react'
import { createStore } from 'redux'
import './App.css'

function reducer (state, action) {
  console.log('reducer', state, action)
  return state
}

const store = createStore(reducer)

class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="App">
        <header className="App-header" />
      </div>
    )
  }
}

export default App
