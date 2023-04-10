import { Resource } from '../../presentation'
import { FETCH_USER_EXISTS } from './action'

const fetchUserExistsReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case FETCH_USER_EXISTS.success:
      return Resource.success({
        data: action
      })

    case FETCH_USER_EXISTS.failure:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default fetchUserExistsReducer
