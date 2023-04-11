import { DomainModule, FetchUserDataUseCaseParams } from 'domain-layer'
import { Obsidian } from 'di'
import { call, put } from 'redux-saga/effects'
import React from 'react'
import { FETCH_USER_DATA } from './action'

function* fetchUserSaga(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserDataUseCase()
      .execute(new FetchUserDataUseCaseParams({ email: action.params.email }))
    yield put({ type: FETCH_USER_DATA.success, payload: data })
  } catch (e) {
    console.log(e)
  }
}
export default fetchUserSaga
