import { MyDatabaseModel } from 'packages/shared/src/shared'
export interface DatabasePort {
  yourFirstDatabaseCall(): Promise<MyDatabaseModel>
}
