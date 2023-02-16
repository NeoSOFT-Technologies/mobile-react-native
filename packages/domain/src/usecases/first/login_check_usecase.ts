import { UserRepository } from '../../repository/user_repository'
import { FutureUseCase } from '../base/base_usecase'
import { Params } from '../base/params'

export class LoginCheckUsecase extends FutureUseCase<LoginCheckParams, boolean> {
  private readonly userRepository: UserRepository

  constructor(repo: UserRepository) {
    super()
    this.userRepository = repo
  }

  async execute(params?: LoginCheckParams): Promise<boolean> {
    if (params.verify) {
      return await this.userRepository.loginCheck({
        userName : params.username
      })
    }
  }
}

export class LoginCheckParams extends Params {
  readonly username?: string

  constructor(params?: LoginCheckFirstParms) {
    super({})
     this.username = params.username
  }

  verify(): boolean {
    if(this.username){
        if(this.username.trim.length > 0){
            return true
        }
    }
    else  return false
    // (this.username?.trim.length > 0)?true:false ?? true 

    
    // if(this.username?.trim.length > 0 ) return true
    // else 
  }
}

export interface LoginCheckFirstParms {
  username?: string
}
