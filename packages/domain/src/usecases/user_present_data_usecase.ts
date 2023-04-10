import { UserModel } from 'packages/shared/src/shared'
import { UserRepository } from '../domain'
import { FutureUseCase } from './base/base_usecase'
import { Params } from './base/params'

export class UserPresentDataUsecase extends FutureUseCase<UserPresentDataUsecaseParams, boolean> {
  private readonly userRepository: UserRepository
  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }
  async execute(params?: UserPresentDataUsecaseParams): Promise<boolean> {
    if (params?.verify) {
      return await this.userRepository.UserPresentData({
        email: params.email
      })
    }
  }
}
export class UserPresentDataUsecaseParams extends Params {
  readonly email?: string

  constructor(params?: { email: string }) {
    super({})
    this.email = params.email
  }

  verify(): boolean {
    return true
  }
}
