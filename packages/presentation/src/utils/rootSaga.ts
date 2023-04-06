import { takeLatest } from '@redux-saga/core/effects'
import { REQUEST_USER } from '../feature/login/actions'
import getUserSaga from '../feature/login/saga'
import { REQUEST_USER_DATA } from '../feature/userDetail/action'
import UserDataRequestSaga from '../feature/userDetail/saga'
import { LOGOUT_USER } from '../feature/logout/action'
import logoutSaga from '../feature/logout/saga'

export default function* rootSaga() {
  yield takeLatest(REQUEST_USER.MAKE_REQUEST, getUserSaga)
  yield takeLatest(REQUEST_USER_DATA.MAKE_USER_REQUEST, UserDataRequestSaga)
  yield takeLatest(LOGOUT_USER.MAKE_LOGOUT, logoutSaga)
}
