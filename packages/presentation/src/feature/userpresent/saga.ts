import { DomainModule,FetchUserExistsUseCaseParams } from 'domain-layer'
import { Obsidian } from 'di'
import { call, put } from 'redux-saga/effects'
import React from 'react'
import { FETCH_USER_EXISTS } from './action'
import { LOGOUT } from '../logout/action'

function* fetchUserExistsSaga(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserExistsUseCase()
      .execute(new FetchUserExistsUseCaseParams({ email: '' }))
      console.log(data)
    yield put({ type: FETCH_USER_EXISTS.success, payload: data })
    yield put({ type: LOGOUT.success, payload: false })
  } catch (e) {
    console.log(e)
  }
}
export default fetchUserExistsSaga
