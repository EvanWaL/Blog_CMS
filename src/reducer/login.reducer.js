import { LOGIN } from '../actions/login.action'
const initialState = {
  authed: false
}

export default function reducer (state = initialState, action) {
  // FIX
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      debugger
      return {
        authed: true
      }
    default:
      return state
  }
}
