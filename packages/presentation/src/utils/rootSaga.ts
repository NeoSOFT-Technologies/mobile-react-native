import { takeLatest } from '@redux-saga/core/effects'
import { REQUEST_POST } from '../feature/getPost/action'
import postsaga from '../feature/getPost/saga'
import { REQUEST_USER } from '../feature/getUser/actions'
import getUserSaga from '../feature/getUser/saga'

export default function* rootSaga() {
  // yield takeLatest(REQUEST_USER.MAKE_REQUEST, getUserSaga)
  // another saga will come here
  yield takeLatest(REQUEST_POST.MAKE_REQUEST, postsaga)
}
