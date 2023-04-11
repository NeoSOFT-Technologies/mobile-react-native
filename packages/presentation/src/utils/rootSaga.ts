import { takeLatest } from '@redux-saga/core/effects'
import { LOGIN } from '../feature/login/actions'
import loginSaga from '../feature/login/saga'
import { FETCH_USER_DATA } from '../feature/userDetail/action'
import fetchUserSaga from '../feature/userDetail/saga'
import { FETCH_USER_EXISTS } from '../feature/userpresent/action'
import fetchUserExistsSaga from '../feature/userpresent/saga'
import { LOGOUT } from '../feature/logout/action'
import logoutSaga from '../feature/logout/saga'

export default function* rootSaga() {
  yield takeLatest(LOGIN.request, loginSaga)
  yield takeLatest(FETCH_USER_DATA.request, fetchUserSaga)
  yield takeLatest(FETCH_USER_EXISTS.request, fetchUserExistsSaga)
  yield takeLatest(LOGOUT.request, logoutSaga)
}
