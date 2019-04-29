import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { LOGIN } from '../actions/login.action'
import Api from '../api/index'

function * fetchData (action) {
  try {
    const data = yield call(Api.login, action.payload)

    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    console.table(error)
    yield put({ type: 'FETCH_FAILED', error })
  }
}

function * watchFetchData () {
  yield takeEvery(LOGIN, fetchData)
}
export default function * root () {
  yield all([fork(watchFetchData)])
}
