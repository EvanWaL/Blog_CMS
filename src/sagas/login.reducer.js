import { call, put, takeEvery, take, all, fork } from 'redux-saga/effects'
import { LOGIN } from '../actions/login.action'
import Api from '../api/index'

function * fetchData (action) {
  try {
    console.log(Api)
    const data = yield call(Api.login(action.payload))

    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

function * watchFetchData () {
  yield takeEvery(LOGIN, fetchData)
}
export default function * root () {
  yield all([fork(watchFetchData)])
}
