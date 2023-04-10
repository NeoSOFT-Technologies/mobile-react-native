import { UserModel } from 'shared'

export interface UserRepository {
  loginUser(params?: { email: string; password: string }): Promise<boolean>
  UserData(params?: { email: string }): Promise<UserModel>
  UserPresentData(params?: { email: string }): Promise<boolean>
}
