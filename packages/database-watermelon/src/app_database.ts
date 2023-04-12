import { UserDao } from './dao/user_dao'
import { Database, DatabaseAdapter, Model } from '@nozbe/watermelondb'
import { Class } from '@nozbe/watermelondb/types'
export class AppDatabase extends Database {
  constructor(options: { adapter: DatabaseAdapter; modelClasses: Model[] | Class<Model>[] }) {
    super(options)
  }

  readonly userDao: UserDao = new UserDao(this)
  // keep adding dao's here
}
