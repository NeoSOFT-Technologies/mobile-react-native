import { MyDatabaseModel } from 'packages/shared/src/shared'
export interface DatabasePort {
  yourFirstDatabaseCall(domain: MyDatabaseModel): Promise<MyDatabaseModel>
}
