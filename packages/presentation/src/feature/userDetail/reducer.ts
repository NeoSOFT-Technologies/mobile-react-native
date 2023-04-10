import { Resource } from '../../presentation'
import { USER_DATA } from './action'

const USER_DATA_REDUCER = (initialState = Resource.none, action) => {
  switch (action.type) {
    case USER_DATA.USER_DATA_REQUEST:
      return Resource.loading()

    case USER_DATA.USER_DATA_SUCCESS:
      return Resource.success({
        data: action
      })

    case USER_DATA.USER_DATA_FAILURE:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default USER_DATA_REDUCER
