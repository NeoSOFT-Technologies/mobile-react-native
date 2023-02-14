import { takeLatest } from "@redux-saga/core/effects";
import { REQUEST_USER } from "../feature/getUser/actions";
import LoginSaga from "../feature/getUser/saga";

export default function* rootSaga() {
  yield takeLatest(REQUEST_USER.MAKE_REQUEST, LoginSaga)
  // another saga will come here 
}
