import { FirstModel } from 'shared'

export interface FirstRepository {
  yourFirstFunction(params: { userName: string; password: string }): Promise<FirstModel>
}
