import { Resource } from '../../utils/resource'
import { FIRST_REQUEST } from './actions'

const firstRequestReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case FIRST_REQUEST.request:
      return Resource.loading()

    case FIRST_REQUEST.success:
      return Resource.success({
        data: action.params
      })

    case FIRST_REQUEST.failure:
      return Resource.error({
        error: 'User Not logged in'
      })

    default:
      return initialState
  }
}

export default firstRequestReducer
