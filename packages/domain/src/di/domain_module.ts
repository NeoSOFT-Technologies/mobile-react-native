import { PostRepositorty } from './../repository/post_repository';
import { LoginCheckUsecase } from 'domain-layer'
import { UserRepository } from './../repository/user_repository'
import { DataModule } from 'data'
import { FirstRepository } from '../repository/first_repository'
import { YourFirstUseCase } from '../usecases/first/your_first_usecase'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import { PostUsecase } from '../usecases/first/post_usecase';

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

  @Provides()
  postusecase(providepostrepo: PostRepositorty): PostUsecase {
    return new PostUsecase(providepostrepo)
  }
  
}
