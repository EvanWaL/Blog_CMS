import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import Api from '../api'

class LoginContainer extends Component {
  constructor () {
    super()
    console.log(Api)
    const res = Api.list()
  }
  render () {
    return (
      <div>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} />
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <div style={{ backgroundColor: 'blue' }}>
              <Button>a</Button>
              <Button>a</Button>
            </div>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} />
        </Row>
      </div>
    )
  }
}
export default LoginContainer
