import { UserRepository } from './../../../domain/src/repository/user_repository';
import { Singleton, Graph, ObjectGraph, Provides } from 'react-obsidian'
import { FirstRepositoryImpl } from '../repositories/first_repository_impl'
import { DatabasePort } from '../out/database_port'
import { NetworkPort } from '../out/network_port'
import { FirstRepository } from 'domain-layer'
import { UserRepositoryImpl } from '../repositories/user_repository_impl';

@Singleton()
@Graph()
export class DataModule extends ObjectGraph {
  @Provides()
  provideFirstRepository(databasePort: DatabasePort, networkPort: NetworkPort): FirstRepository {
    return new FirstRepositoryImpl(databasePort, networkPort)
  }
  
  @Provides()
  provideUserRepository(databasePort: DatabasePort, networkPort: NetworkPort): UserRepository {
    return new UserRepositoryImpl(databasePort,networkPort)
  }
  
}
