import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rootSaga } from '../utils/rootSaga'
import { signInReducer } from './getUser/reducer'
import { signInSaga } from './getUser/saga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({ reducer: combineReducers({}), middleware: [
    sagaMiddleware
] })
sagaMiddleware.run(rootSaga)

export default store