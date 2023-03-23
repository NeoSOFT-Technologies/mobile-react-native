import { UserDetailsModel } from './../../../shared/src/model/userDetailsmodal';
import { UserCheckModal } from 'shared'
export interface DatabasePort {
  userDatabaseCall(userData: UserCheckModal): Promise<UserCheckModal>
  getUserDetails(data:UserDetailsModel) : Promise<boolean>
}
