export class UserModel {
  email?: string
  password?: string
  access_token?: string

  constructor(params?: { username?: string, password?: string, access_token?: string }) {
    this.email = params.username
    this.password = params.password
    this.access_token = params.access_token
  }
}
