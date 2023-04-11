import { UserRepository } from './../repository/user_repository'
import { DataModule } from 'data'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import { LoginUseCase } from '../usecases/login_user_usecase'
import { LogoutUseCase } from '../usecases/logout_usecase'
import { FetchUserDataUseCase } from '../usecases/user_details_usecase'
import { FetchUserExistsUseCase } from '../usecases/user_present_data_usecase'

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  provideLoginUseCase(provideUserRepository: UserRepository): LoginUseCase {
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
  @Provides()
  provideLogoutUseCase(provideUserRepository: UserRepository): LogoutUseCase {
    return new LogoutUseCase(provideUserRepository)
  }
}
