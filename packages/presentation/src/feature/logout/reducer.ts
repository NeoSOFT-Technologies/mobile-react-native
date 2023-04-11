import data from 'packages/data/lib/data'
import { Resource } from '../../utils/resource'
import { LOGOUT } from './action'

const logoutReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case LOGOUT.request:
      return Resource.loading()

    case LOGOUT.success:
      return Resource.success({
        data: action
      })

    case LOGOUT.failure:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default logoutReducer
