import { LoginCheckUsecase } from 'domain-layer'
import { UserRepository } from './../repository/user_repository'
import { DataModule } from 'data'
import { FirstRepository } from '../repository/first_repository'
import { YourFirstUseCase } from '../usecases/first/your_first_usecase'
import { Graph, ObjectGraph, Provides, Singleton } from 'react-obsidian'

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  providesYourFirstUseCase(repo: FirstRepository): YourFirstUseCase {
    return new YourFirstUseCase(repo)
  }

  @Provides()
  providesLoginCheckUseCase(repo: UserRepository): LoginCheckUsecase {
    alert('di,domain')
    return new LoginCheckUsecase(repo)
  }
}
