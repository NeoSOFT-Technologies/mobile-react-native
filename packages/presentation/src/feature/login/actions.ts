export enum LOGIN {
  request= 'LOGIN_REQUEST',
  success = 'LOGIN_SUCCESS',
  failure = 'LOGIN_FAILURE'
}

export const loginAction = params => ({
  type: LOGIN.request,
  params
})
