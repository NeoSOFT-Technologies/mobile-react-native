import { MyDatabaseModel, PostModel, User } from 'shared'
export interface DatabasePort {
  yourFirstDatabaseCall(domain: MyDatabaseModel): Promise<MyDatabaseModel>
  userCheck(user: User): Promise<boolean>
  postDatabaseCall(): Promise<PostModel>
}
