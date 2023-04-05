import { Resource } from '../../presentation'
import { REQUEST_USER_PRESENT_DATA } from './action'

const UserPresentReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case REQUEST_USER_PRESENT_DATA.MAKE_USER_PRESENT_REQUEST:
      return Resource.loading()

    case REQUEST_USER_PRESENT_DATA.REQUEST_USER_DATA_PRESENT_SUCCESS:
      return Resource.success({
        data: action
      })

    case REQUEST_USER_PRESENT_DATA.REQUEST_USER_DATA_PRESENT_FAILURE:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default UserPresentReducer
