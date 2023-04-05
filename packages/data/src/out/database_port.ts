import { UserModel } from 'shared'

export interface DatabasePort {
  adduser(params?: { email: string; password: string; token: string }): Promise<boolean>
  getUserDetails(data: UserModel): Promise<UserModel>
}
