import { DomainModule, YourFirstUseCaseParams } from 'domain-layer'
import { Obsidian } from 'di'
import { put } from 'redux-saga/effects'
import { FIRST_REQUEST } from './actions'

function* firstRequestSaga(action) {
  try {
    const data: any = yield Obsidian.obtain(DomainModule)
      .providesYourFirstUseCase()
      .execute(new YourFirstUseCaseParams({ emailOrPhone: '', password: '' }))
    yield put({ type: FIRST_REQUEST.request, payload: data })
  } catch (e) {
    console.log(e)
  }
}
export default firstRequestSaga
