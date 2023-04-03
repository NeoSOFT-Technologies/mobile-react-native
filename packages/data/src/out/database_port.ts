import { UserDetailsModel } from './../../../shared/src/model/userDetailsmodal'
import { UserCheckModel } from 'shared'
export interface DatabasePort {
  userDatabaseCall(userData: UserCheckModel): Promise<UserCheckModel>
  getUserDetails(data: UserDetailsModel): Promise<UserDetailsModel>
}
