import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { LOGIN } from '../actions/login.action'
import Api from '../api/index'

function * fetchData (action) {
  try {
    const res = yield call(Api.login, action.payload)
    if (res && res.data && res.data.code === 200) {
      yield put(push('/counter'))
    }
    // yield put({ type: 'FETCH_SUCCEEDED', data })
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
