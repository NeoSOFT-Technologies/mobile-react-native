import { UserRepository } from '../repository/user_repository'
import { FutureUseCase } from './base/base_usecase'
import { Params } from './base/params'

export class LoginUserUsecase extends FutureUseCase<LoginUserParams, boolean> {
  private readonly userRepository: UserRepository
  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }
  async execute(params?: LoginUserParams): Promise<boolean> {
    if (params?.verify()) {
      return await this.userRepository.loginUser({
        email: params.email,
        password: params.password
      })
    } else return false
  }
}
export class LoginUserParams extends Params {
  readonly email?: string
  readonly password?: string

  constructor(params?: { email: string; password: string }) {
    super({})
    this.email = params.email
    this.password = params.password
  }

  verify(): boolean {
    if (this.email == '' || this.password == '') return false
    else return true
  }
}
