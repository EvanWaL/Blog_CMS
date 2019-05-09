import { LOGIN } from '../actions/login.action'
const initialState = {
  isAuthenticated: false
}

export default function reducer (state = initialState, action) {
  // FIX
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return {
        isAuthenticated: true
      }
    default:
      return state
  }
}
