import { UserModel } from 'shared'

export interface UserRepository {
  login(params?: { email: string; password: string }): Promise<boolean>
  fetchUserData(params?: { email: string }): Promise<UserModel>
  fetchUserExists(params?: { email: string }): Promise<boolean>
  logoutUser(params?: { email: string }): Promise<boolean>
}
