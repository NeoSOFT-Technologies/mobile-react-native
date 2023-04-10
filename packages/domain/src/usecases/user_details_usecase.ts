import { UserModel } from 'packages/shared/src/shared'
import { UserRepository } from '../domain'
import { FutureUseCase } from './base/base_usecase'
import { Params } from './base/params'

export class FetchUserDataUseCase extends FutureUseCase<FetchUserDataUseCaseParams, UserModel> {
  private readonly userRepository: UserRepository
  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }
  async execute(params?: FetchUserDataUseCaseParams): Promise<UserModel> {
    if (params?.verify) {
      return await this.userRepository.fetchUserData({
        email: params.email
      })
    }
  }
}
export class FetchUserDataUseCaseParams extends Params {
  readonly email?: string

  constructor(params?: { email: string }) {
    super({})
    this.email = params.email
  }

  verify(): boolean {
    return true
  }
}
