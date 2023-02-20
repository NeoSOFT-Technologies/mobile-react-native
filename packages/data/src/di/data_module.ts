import { NetworkModule } from './../../../network-retrofit/src/di/network_module'
import { DatabaseModule } from 'database-watermelon'
import { UserRepository } from 'domain-layer'
import { Singleton, Graph, ObjectGraph, Provides } from 'react-obsidian'
import { FirstRepositoryImpl } from '../repositories/first_repository_impl'
import { DatabasePort } from '../out/database_port'
import { NetworkPort } from '../out/network_port'
import { FirstRepository } from 'domain-layer'
import { UserRepositoryImpl } from '../repositories/user_repository_impl'

@Singleton()
@Graph({
  subgraphs: [
    //DatabaseModule,
    NetworkModule
  ]
})
export class DataModule extends ObjectGraph {
  constructor() {
    super()
    console.log('Hello from Data')
  }

  @Provides()
  provideFirstRepository(networkPort: NetworkPort): FirstRepository {
    console.log('provideFirstRepository')

    return new FirstRepositoryImpl({ networkPort: networkPort })
  }

  @Provides()
  provideUserRepository(networkPort: NetworkPort): UserRepository {
    console.log('provideUserRepository')
    return new UserRepositoryImpl({ networkPort: networkPort })
  }
}
