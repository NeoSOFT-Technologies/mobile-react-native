export class UserCheckModel {
  readonly email?: string
  readonly password?: string
  readonly token?: any

  constructor(params?: { username?: string; password?: string; token?: any }) {
    this.email = params.username
    this.password = params.password
    this.token = params.token
  }
}
