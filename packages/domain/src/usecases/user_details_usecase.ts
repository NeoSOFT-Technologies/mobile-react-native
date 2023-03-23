import { UserDetailsModel } from 'shared'
import { UserRepository } from '../domain'
import { FutureUseCase } from './base/base_usecase'
import { Params } from './base/params'

export class UserDetailsUseCase extends FutureUseCase<UserDetailsUseCaseParams, boolean> {
  private readonly userRepository: UserRepository
  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }
  async execute(params?: UserDetailsUseCaseParams): Promise<boolean> {
    if (params?.verify) {
      return await this.userRepository.getuserdata({
        email: params.email
      })
    }
  }
}
export class UserDetailsUseCaseParams extends Params {
  readonly email?: string

  constructor(params?: { email: string }) {
    super({})
    this.email = params.email
  }

  verify(): boolean {
    return true
  }
}
