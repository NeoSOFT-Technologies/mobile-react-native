import { LoginCheckUsecase } from 'domain-layer'
import { UserRepository } from './../repository/user_repository'
import { DataModule } from 'data'
import { FirstRepository } from '../repository/first_repository'
import { YourFirstUseCase } from '../usecases/first/your_first_usecase'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  providesYourFirstUseCase(repo: FirstRepository): YourFirstUseCase {
    return new YourFirstUseCase(repo)
  }

  @Provides()
  providesLoginCheckUseCase(provideUserRepository: UserRepository): LoginCheckUsecase {
    return new LoginCheckUsecase(provideUserRepository)
  }
}
