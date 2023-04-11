import { FirstModel} from 'shared'

export interface NetworkPort {
  login(params?: { email: string, password: string }): Promise<FirstModel>
}
