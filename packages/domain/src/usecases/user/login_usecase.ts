import { UserRepository } from '../../repository/user_repository'
import { FutureUseCase } from '../base/base_usecase'
import { Params } from '../base/params'

export class LoginUseCase extends FutureUseCase<LoginUseCaseParams, boolean> {
  private readonly userRepository: UserRepository

  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }

  async execute(params: LoginUseCaseParams): Promise<boolean> {
    if (params.verify) {
      return await this.userRepository.loginWithEmail({ userName: params.emailOrPhone, password: params.password })
    }
  }
}

export class LoginUseCaseParams extends Params {
  readonly emailOrPhone: string
  readonly password: string

  constructor(params: ILoginParams) {
    super({})
    this.emailOrPhone = params.emailOrPhone
    this.password = params.password
  }

  verify(): boolean {
    return true;
  }
}

export interface ILoginParams {
  emailOrPhone: string
  password: string
}
