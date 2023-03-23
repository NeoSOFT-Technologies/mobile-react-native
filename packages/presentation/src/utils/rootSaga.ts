import { takeLatest } from '@redux-saga/core/effects'
import { REQUEST_USER } from '../feature/login/actions'
import getUserSaga from '../feature/login/saga'
import { REQUEST_USER_DATA } from '../feature/userDetail/action'
import UserDataRequestSaga from '../feature/userDetail/saga'

export default function* rootSaga() {
 yield takeLatest(REQUEST_USER.MAKE_REQUEST, getUserSaga)
 yield takeLatest(REQUEST_USER_DATA.MAKE_REQUEST,UserDataRequestSaga)
}
