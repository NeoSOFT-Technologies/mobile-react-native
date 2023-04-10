import { UserRepository } from './../repository/user_repository'
import { DataModule } from 'data'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import { LoginUseCase } from '../usecases/login_user_usecase'
import { FetchUserDataUseCase, FetchUserExistsUseCase } from '../domain'

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  providesLoginUseCase(provideUserRepository: UserRepository): LoginUseCase {
    return new LoginUseCase(provideUserRepository)
  }
  @Provides()
  provideUserDataUseCase(provideUserRepository: UserRepository): FetchUserDataUseCase {
    return new FetchUserDataUseCase(provideUserRepository)
  }
  @Provides()
  provideUserExistsUseCase(provideUserRepository: UserRepository): FetchUserExistsUseCase {
    return new FetchUserExistsUseCase(provideUserRepository)
  }
}
