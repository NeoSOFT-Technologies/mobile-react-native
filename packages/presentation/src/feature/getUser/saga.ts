import { call, put } from 'redux-saga/effects'
import { REQUEST_USER } from './actions'

function* LoginSaga() {
  try {
    const data = yield call(() => true)
    yield put({ type: REQUEST_USER.REQUEST_USER_SUCCESS, payload: data })
  } catch (e) {
    console.log(e)
  }
}
export default LoginSaga
