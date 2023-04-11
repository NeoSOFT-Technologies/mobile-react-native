import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { call, put } from 'redux-saga/effects'
import React from 'react'
import { FETCH_USER_EXISTS } from './action'
import { FetchUserExistsUseCaseParams } from 'packages/domain/src/domain'

function* fetchUserExistsSaga(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserExistsUseCase()
      .execute(new FetchUserExistsUseCaseParams({ email: '' }))
    yield put({ type: FETCH_USER_EXISTS.success, payload: data })
  } catch (e) {
    console.log(e)
  }
}
export default fetchUserExistsSaga
