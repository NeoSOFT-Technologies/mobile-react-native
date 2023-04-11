
export enum FIRST_REQUEST {
  request = 'FIRST_REQUEST',
  success = ' FIRST_REQUEST_SUCCESS',
  failure = 'FIRST_REQUEST_FAILURE'
}

export const firstRequestAction = params => ({
  type: FIRST_REQUEST.request,
  params
})
