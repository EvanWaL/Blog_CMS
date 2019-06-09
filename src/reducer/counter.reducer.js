import { INCREMENT, DECREMENT, CHANGE_VALUE } from '../actions/counter.action'

const initialState = {
  count: 0
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    case CHANGE_VALUE:
      return { count: action.value.value }
    default:
      return state
  }
}
