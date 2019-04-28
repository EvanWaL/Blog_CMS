import { fork } from 'redux-saga/effects'

import LoginSaga from './login.reducer'

export default function * rootSaga () {
  yield fork(LoginSaga)
}
