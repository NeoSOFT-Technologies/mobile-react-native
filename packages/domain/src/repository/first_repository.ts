export interface FirstRepository {
  yourFirstFunction(params: { userName: string; password: string }): Promise<boolean>
}
