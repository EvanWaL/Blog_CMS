import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import Api from '../api'

import style from './login.module.scss'

class LoginContainer extends Component {
  constructor () {
    super()
    console.log(Api)
    const res = Api.list()
  }
  render () {
    return (
      <div className={style.loginWrapper}>
        <Row>
          <Col xs={2} md={6} lg={6} xl={8} />
          <Col xs={20} md={12} lg={10} xl={8}>
            <div className={style.loginBox}>
              <Input placeholder="Basic usage" />
              <Input placeholder="Basic usage" />
              <div>
                <Button>a</Button>
                <Button>a</Button>
              </div>
            </div>
          </Col>
          <Col xs={2} md={6} lg={6} xl={8} />
        </Row>
      </div>
    )
  }
}
export default LoginContainer
