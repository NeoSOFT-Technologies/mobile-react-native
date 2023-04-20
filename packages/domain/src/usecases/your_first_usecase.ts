import { FirstModel } from 'shared'
import { FirstRepository } from '../repository/first_repository'
import { FutureUseCase } from './base/base_usecase'
import { Params } from './base/params'

export class YourFirstUseCase extends FutureUseCase<YourFirstUseCaseParams, FirstModel> {
  private readonly yourFirstRepository: FirstRepository

  constructor(yourFirstRepository: FirstRepository) {
    super()
    this.yourFirstRepository = yourFirstRepository
  }

  async execute(params: YourFirstUseCaseParams): Promise<FirstModel> {
    if (params.verify()) {
      return await this.yourFirstRepository.yourFirstFunction({
        userName: params.emailOrPhone,
        password: params.password
      })
    }
  }
}

export class YourFirstUseCaseParams extends Params {
  readonly emailOrPhone: string
  readonly password: string

  constructor(params?: IYourFirstParams) {
    super({})
    this.emailOrPhone = params.emailOrPhone
    this.password = params.password
  }

  verify(): boolean {
    if (this.emailOrPhone == '' || this.password == '') return false
    else return true
  }
}

export interface IYourFirstParams {
  emailOrPhone?: string
  password?: string
}
