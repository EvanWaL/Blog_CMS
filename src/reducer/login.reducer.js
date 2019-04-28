import { LOGIN } from '../actions/login.action'
const initialState = {
  authed: false
}

export default function reducer (state = initialState, action) {
  // FIX
  switch (action.type) {
    case LOGIN:
      console.log(1)
      return { ...state }

    default:
      return state
  }
}
