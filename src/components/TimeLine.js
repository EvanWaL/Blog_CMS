import React, { Component, Fragment } from 'react'
import { Timeline } from 'antd'

class NewPage extends Component {
  render () {
    return (
      <Fragment>
        <Timeline mode="alternate">
          <Timeline.Item>风萨发生的</Timeline.Item>
        </Timeline>
      </Fragment>
    )
  }
}
export default NewPage
