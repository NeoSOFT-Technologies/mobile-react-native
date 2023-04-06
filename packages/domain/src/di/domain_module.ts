import { LoginCheckUsecase, UserDetailsUseCase } from 'domain-layer'
import { UserRepository } from './../repository/user_repository'
import { DataModule } from 'data'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import { LogoutUsecase } from '../usecases/logout_usecase'

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  providesLoginCheckUseCase(provideUserRepository: UserRepository): LoginCheckUsecase {
    return new LoginCheckUsecase(provideUserRepository)
  }
  @Provides()
  provideUserDetailsUseCase(provideUserRepository: UserRepository): UserDetailsUseCase {
    return new UserDetailsUseCase(provideUserRepository)
  }
  @Provides()
  providesLogoutUseCase(provideUserRepository: UserRepository): LogoutUsecase {
    return new LogoutUsecase(provideUserRepository)
  }
}
