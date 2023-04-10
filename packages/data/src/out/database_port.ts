import { UserModel } from 'shared'

export interface DatabasePort {
  addUser(params?: { email: string; password: string; token: string }): Promise<boolean>
  userDetails(data: UserModel): Promise<UserModel>
  getuserPresentData(data: UserModel): Promise<boolean>
}
