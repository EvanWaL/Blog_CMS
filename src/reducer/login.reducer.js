import { login } from '../actions/login.action'
const initialState = {
  authed: false
}

export default function reducer (state = initialState, action) {
  console.log('reducer', state, action)
  // FIX
  switch (action) {
    case login:
      console.log(1)
      break
    default:
      return state
  }
}
