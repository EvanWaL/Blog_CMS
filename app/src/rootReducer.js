import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import counter from './reducer/counter.reducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    counter
  })
