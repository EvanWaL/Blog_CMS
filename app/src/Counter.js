import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.increment()
    // << 在这使用
  }
  decrement = () => {
    this.props.decrement()
  }

  render () {
    return <div />
  }
}
function mapStateToProps (state) {
  return { count: state.count }
}

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
