import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import 'normalize.css'
import './App.css'
import routes from './routes/index.routes'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">{renderRoutes(routes)}</div>
      </Router>
    )
  }
}

export default App
