import data from 'packages/data/lib/data'
import { Resource } from '../../utils/resource'
import { REQUEST_USER } from './actions'

const userRequestReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case REQUEST_USER.MAKE_REQUEST:
      return Resource.loading()

    case REQUEST_USER.REQUEST_USER_SUCCESS:
      return Resource.success({
        data: action.params
      })

    case REQUEST_USER.REQUEST_USER_FAILURE:
      return Resource.error({
        error: 'User Not logged in'
      })
  }
}
