import { UserCheckModal } from 'shared';
export interface DatabasePort {
  userDatabaseCall(userData:UserCheckModal): Promise<UserCheckModal>
}
