import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSaga from '../utils/rootSaga'
import firstRequestReducer from './first/reducer'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: combineReducers({
    first : firstRequestReducer
  }),
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export default store
