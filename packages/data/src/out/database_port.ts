import { FirstModel } from 'packages/shared/src/shared'
export interface DatabasePort {
  yourFirstDatabaseCall(domain: FirstModel): Promise<FirstModel>
}