import { UserModel } from 'packages/shared/src/shared'
import { UserRepository } from '../domain'
import { FutureUseCase } from './base/base_usecase'
import { Params } from './base/params'

export class FetchUserExistsUseCase extends FutureUseCase<FetchUserExistsUseCaseParams, boolean> {
  private readonly userRepository: UserRepository
  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }
  async execute(params?: FetchUserExistsUseCaseParams): Promise<boolean> {
    if (params?.verify) {
      return await this.userRepository.fetchUserExists({
        email: params.email
      })
    }
  }
}
export class FetchUserExistsUseCaseParams extends Params {
  readonly email?: string

  constructor(params?: { email: string }) {
    super({})
    this.email = params.email
  }

  verify(): boolean {
    return true
  }
}
