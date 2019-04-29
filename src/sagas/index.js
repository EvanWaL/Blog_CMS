import { fork } from 'redux-saga/effects'

import LoginSaga from './loginSage'

export default function * rootSaga () {
  yield fork(LoginSaga)
}
