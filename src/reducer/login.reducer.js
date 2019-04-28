import { login } from '../actions/login.action'
const initialState = {
  authed: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case login:
      break
    default:
      return state
  }
}
