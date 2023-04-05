export enum REQUEST_USER_DATA {
  MAKE_USER_REQUEST = 'MAKE_USER_REQUEST',
  REQUEST_USER_DATA_SUCCESS = 'REQUEST_USER_DATA_SUCCESS',
  REQUEST_USER_DATA_FAILURE = 'REQUEST_USER_DATA_FAILURE'
}

export const userDataRequest = params => ({
  type: REQUEST_USER_DATA.MAKE_USER_REQUEST,
  params
})
