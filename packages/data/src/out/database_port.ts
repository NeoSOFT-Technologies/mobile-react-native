import { UserModel } from 'shared'

export interface DatabasePort {
  addUser(params?: { email: string; password: string; token: string }): Promise<boolean>
  fetchUserData(data: UserModel): Promise<UserModel>
  fetchUserExists(data: UserModel): Promise<boolean>
  removeUser(params: { email: string }): Promise<boolean>
}
