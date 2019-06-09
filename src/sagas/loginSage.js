import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { LOGIN } from '../actions/login.action'
import Api from '../api/index'
import Cookies from 'js-cookie'

const cookieName = 'evan'

function * fetchData (action) {
  try {
    const res = yield call(Api.login, action.payload)
    if (res && res.data && res.data.code === 200) {
      Cookies.set(cookieName, { logged: true })
      yield put({ type: 'LOGIN_SUCCEEDED', payload: true })
      yield put(push('/counter'))
    }
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
