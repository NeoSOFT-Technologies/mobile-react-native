import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSaga from '../utils/rootSaga'
import loginReducer from './login/reducer'
import fetchUserReducer from './userDetail/reducer'
import fetchUserExistsReducer from './userpresent/reducer'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: combineReducers({
    login: loginReducer,
    userData: fetchUserReducer,
    userExistsData: fetchUserExistsReducer
  }),
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export default store
