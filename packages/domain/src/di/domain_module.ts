import { DataModule } from 'data';
import { Graph, ObjectGraph, Provides, Singleton } from "packages/dependency_injection/src/dependency_injection";
import { FirstRepository } from '../repository/first_repository';
import { YourFirstUseCase } from '../usecases/your_first_usecase';

@Singleton()
@Graph({ subgraphs: [DataModule] })
export class DomainModule extends ObjectGraph {
  @Provides()
  providesYourFirstUseCase(provideUserRepository: FirstRepository): YourFirstUseCase {
    return new YourFirstUseCase(provideUserRepository)
  }
}
