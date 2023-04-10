import { UserPresentDataUsecase } from '../usecases/user_present_data_usecase'
import { UserRepository } from './../repository/user_repository'
import { DataModule } from 'data'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import { LoginUserUsecase } from '../usecases/login_user_usecase'
import { UserDetailsUseCase } from '../usecases/user_details_usecase'

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  providesLoginCheckUseCase(provideUserRepository: UserRepository): LoginUserUsecase {
    return new LoginUserUsecase(provideUserRepository)
  }
  @Provides()
  provideUserDetailsUseCase(provideUserRepository: UserRepository): UserDetailsUseCase {
    return new UserDetailsUseCase(provideUserRepository)
  }
  @Provides()
  provideUserPresentDataUseCase(provideUserRepository: UserRepository): UserPresentDataUsecase {
    return new UserPresentDataUsecase(provideUserRepository)
  }
}
