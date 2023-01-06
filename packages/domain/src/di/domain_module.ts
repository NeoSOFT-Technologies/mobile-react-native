import { UserRepository } from './../repository/user_repository'
import { LoginUseCase } from './../usecases/user/login_usecase'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'

@Singleton()
@Graph()
export class DomainModule extends ObjectGraph {
  @Provides()
  providesLoginUseCase(repo: UserRepository): LoginUseCase {
    return new LoginUseCase(repo)
  }
}
