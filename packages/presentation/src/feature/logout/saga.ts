import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { put } from 'redux-saga/effects'

import { LoginCheckParams, LogoutParams } from 'domain-layer'
import { LOGOUT_USER } from './action'

function* logoutSaga(action) {
  try {
    const data: any = yield Obsidian.obtain(DomainModule)
      .providesLogoutUseCase()
      .execute(new LogoutParams({ email: action?.params?.email }))
    if (data == false) {
      yield put({ type: LOGOUT_USER.LOGOUT_USER_FAILURE, payload: data })
    } else {
      yield put({ type: LOGOUT_USER.LOGOUT_USER_SUCCESS, payload: data })
    }
  } catch (e) {
    console.log(e)
  }
}
export default logoutSaga
