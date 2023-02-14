import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSaga  from '../utils/rootSaga'
import userRequestReducer from './getUser/reducer'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({ reducer: combineReducers({loginData: userRequestReducer}), middleware: [sagaMiddleware] })
sagaMiddleware.run(rootSaga)

export default store
