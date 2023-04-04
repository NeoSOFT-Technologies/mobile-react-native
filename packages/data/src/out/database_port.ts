import { UserModel } from "shared"

export interface DatabasePort {
  userDatabaseCall(params?: { email: string, password: string,token:string }): Promise<boolean>
  getUserDetails(data: UserModel): Promise<UserModel>
}
