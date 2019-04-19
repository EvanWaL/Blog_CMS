import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, changeValue } from './actions'
import { Button, Input } from 'antd'

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.increment()
    // << 在这使用
  }
  decrement = () => {
    this.props.decrement()
  }

  changeValue = () => {
    this.props.changeValue()
  }

  render () {
    console.log(this)
    return (
      <Fragment>
        <div style={{ display: 'flex' }}>
          <Button type="primary" onClick={this.increment}>
            +
          </Button>
          <div style={{ width: '100px' }}>
            <Input placeholder="Basic usage" value={this.props.count} />
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
  decrement
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
