import { takeLatest } from '@redux-saga/core/effects'
import { REQUEST_USER } from '../feature/login/actions'
import getUserSaga from '../feature/login/saga'
import { REQUEST_USER_DATA } from '../feature/userDetail/action'
import UserDataRequestSaga from '../feature/userDetail/saga'
import { REQUEST_USER_PRESENT_DATA } from '../feature/userpresent/action'
import UserDataPresentSaga from '../feature/userpresent/saga'

export default function* rootSaga() {
  yield takeLatest(REQUEST_USER.MAKE_REQUEST, getUserSaga)
  yield takeLatest(REQUEST_USER_DATA.MAKE_USER_REQUEST, UserDataRequestSaga)
  yield takeLatest(REQUEST_USER_PRESENT_DATA.MAKE_USER_PRESENT_REQUEST, UserDataPresentSaga)
}
