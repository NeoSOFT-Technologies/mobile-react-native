import { LoginCheckParams } from 'domain-layer/src/usecases/first/login_check_usecase'
import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { put } from 'redux-saga/effects'
import { REQUEST_USER } from './actions'

function* getUserSaga(action) {
  const mesage = 'Request failed with status code 403'
  try {
    const data: any = yield Obsidian.obtain(DomainModule)
      .providesLoginCheckUseCase()
      .execute(
        new LoginCheckParams({ username: action?.params?.data?.email, password: action?.params?.data?.password })
      )
    const sortData: any = data?.__changes?._value?._raw?.email
    if (data == mesage) {
      yield put({ type: REQUEST_USER.REQUEST_USER_FAILURE, payload: data })
    } else {
      yield put({ type: REQUEST_USER.REQUEST_USER_SUCCESS, payload: sortData })
    }
  } catch (e) {
    console.log(e)
  }
}
export default getUserSaga
