export class FirstModel {
  email?: string
  password?: string

  constructor(params?: { username?: string, password?: string}) {
    this.email = params.username
    this.password = params.password
  }
}