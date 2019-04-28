// import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import mySaga from '../sagas'
import createRootReducer from '../reducer/rootReducer'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

export default function configureStore (preloadedState = {}) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(logger, routerMiddleware(history), sagaMiddleware)
    )
  )
  sagaMiddleware.run(mySaga)

  return store
}
