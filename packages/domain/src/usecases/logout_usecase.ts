import { UserRepository } from '../repository/user_repository'
import { FutureUseCase } from './base/base_usecase'
import { Params } from './base/params'

export class LogoutUsecase extends FutureUseCase<LogoutParams, boolean> {
  private readonly userRepository: UserRepository
  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }
  async execute(params?: LogoutParams): Promise<boolean> {
    if (params?.verify()) {
      return await this.userRepository.logoutUser({
        email: params.email,
      })
    } else return false
  }
}
export class LogoutParams extends Params {
  readonly email?: string

  constructor(params?: { email: string }) {
    super({})
    this.email = params.email
  }
  verify(): boolean {
    return true
  }
}
