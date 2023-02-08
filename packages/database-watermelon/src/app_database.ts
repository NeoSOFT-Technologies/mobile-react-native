import { Database, DatabaseAdapter, Model } from '@nozbe/watermelondb'
import { Class } from '@nozbe/watermelondb/types'
import { MyModelDao } from './dao/my_dao'
export class AppDatabase extends Database {
  constructor(options: { adapter: DatabaseAdapter; modelClasses: Model[] | Class<Model>[] }) {
    super(options)
  }

  readonly myModelDao: MyModelDao = new MyModelDao(this)
  // keep adding dao's here
}
