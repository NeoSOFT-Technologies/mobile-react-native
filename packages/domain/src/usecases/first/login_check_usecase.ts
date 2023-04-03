import { UserCheckModel } from 'shared'
import { UserRepository } from '../../repository/user_repository'
import { FutureUseCase } from '../base/base_usecase'
import { Params } from '../base/params'

export class LoginCheckUsecase extends FutureUseCase<LoginCheckParams, UserCheckModel> {
  private readonly userRepository: UserRepository
  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }
  async execute(params?: LoginCheckParams): Promise<UserCheckModel> {
    if (params?.verify) {
      return await this.userRepository.loginCheck({
        username: params.username,
        password: params.password
      })
    }
  }
}
export class LoginCheckParams extends Params {
  readonly username?: string
  readonly password?: string

  constructor(params?: { username: string; password: string }) {
    super({})
    this.username = params.username
    this.password = params.password
  }

  verify(): boolean {
    return true
  }
}
