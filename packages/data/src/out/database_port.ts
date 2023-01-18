export interface DatabasePort {
  yourFirstDatabaseCall(status: boolean): Promise<boolean>
}
