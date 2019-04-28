import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { LOGIN, login } from '../actions/login.action'
import Api from '../api/index'

export function * fetchData (action) {
  try {
    console.log(2)
    const data = yield call(Api.login, action.payload.url)
    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

function * watchFetchData () {
  yield * takeEvery(login, fetchData)
}
export default function * root () {
  yield all([fork(watchFetchData)])
}
