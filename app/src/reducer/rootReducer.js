import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import counter from './counter.reducer'
import login from './login.reducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    counter,
    login
  })
