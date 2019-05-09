import React, { Component } from 'react'
import notFound from '../assets/image/404.jpg'

class NotFound extends Component {
  render () {
    return (
      <div>
        <img src={notFound} style={{ width: '100vw', height: '100vh' }} />
      </div>
    )
  }
}
export default NotFound
