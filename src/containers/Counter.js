import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, changeValue } from '../actions/counter.action'
import { Button, Input } from 'antd'

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.increment()
  }
  decrement = () => {
    this.props.decrement()
  }

  changeValue = value => {
    this.props.changeValue({ value })
  }
  handleChangeValue = e => {
    this.changeValue(e.target.value)
  }

  render () {
    return (
      <Fragment>
        <div style={{ display: 'flex' }}>
          <Button type="primary" onClick={this.increment}>
            +
          </Button>
          <div style={{ width: '100px' }}>
            <Input
              placeholder="Basic usage"
              value={this.props.count}
              onChange={this.handleChangeValue}
            />
          </div>

          <Button type="primary" onClick={this.decrement}>
            -
          </Button>
        </div>
      </Fragment>
    )
  }
}
// function mapStateToProps (state) {
//   console.log(state)
//   return { count: state.count }
// }
const mapStateToProps = state => ({ count: state.counter.count })

// 在这个对象中, 属性名会成为 prop 的 names,
// 属性值应该是 action 生成器函数.
// 它们跟 `dispatch` 绑定起来.
const mapDispatchToProps = {
  increment,
  decrement,
  changeValue
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
