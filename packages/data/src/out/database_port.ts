
import { MyDatabaseModel,User } from 'packages/shared/src/shared'
export interface DatabasePort {
  yourFirstDatabaseCall(domain: MyDatabaseModel): Promise<MyDatabaseModel>
  userCheck(user:User): Promise<boolean>
}
