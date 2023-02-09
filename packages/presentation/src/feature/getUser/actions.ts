import { Resource } from './../../utils/resource'

export enum REQUEST_USER {
  MAKE_REQUEST,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILURE
}

export const userRequest = params => ({
  type: REQUEST_USER.MAKE_REQUEST,
  params
})
