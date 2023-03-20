import { takeLatest } from '@redux-saga/core/effects'
import { REQUEST_USER } from '../feature/getUser/actions'
import getUserSaga from '../feature/getUser/saga'

export default function* rootSaga() {
  yield takeLatest(REQUEST_USER.MAKE_REQUEST, getUserSaga)
}
