import { takeLatest } from "redux-saga/effects";
import { FIRST_REQUEST } from "../feature/first/actions";
import firstRequestSaga from "../feature/first/saga";


export default function* rootSaga() {
  yield takeLatest(FIRST_REQUEST.request, firstRequestSaga)
}
