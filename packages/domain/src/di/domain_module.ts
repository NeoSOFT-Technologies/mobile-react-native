import { DataModule } from 'data'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import { FirstRepository } from '../repository/first_repository'
import { YourFirstUseCase } from '../usecases/your_first_usecase'

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  providesYourFirstUseCase(provideFirstRepository: FirstRepository): YourFirstUseCase {
    return new YourFirstUseCase(provideFirstRepository)
  }
}
