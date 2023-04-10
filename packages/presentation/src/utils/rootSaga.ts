import { takeLatest } from '@redux-saga/core/effects'
import { LOGIN_USER } from '../feature/login/actions'
import LOGIN_USER_SAGA from '../feature/login/saga'
import { USER_DATA } from '../feature/userDetail/action'
import USER_DATA_SAGA from '../feature/userDetail/saga'
import { USER_PRESENT_DATA } from '../feature/userpresent/action'
import USER_PRESENT_DATA_SAGA from '../feature/userpresent/saga'

export default function* rootSaga() {
  yield takeLatest(LOGIN_USER.LOGIN_USER_REQUEST, LOGIN_USER_SAGA)
  yield takeLatest(USER_DATA.USER_DATA_REQUEST, USER_DATA_SAGA)
  yield takeLatest(USER_PRESENT_DATA.USER_PRESENT_DATA_REQUEST, USER_PRESENT_DATA_SAGA)
}
