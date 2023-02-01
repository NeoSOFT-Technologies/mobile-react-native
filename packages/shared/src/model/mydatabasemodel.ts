export class MyDatabaseModel {
    readonly databaseStatus: boolean
    
    constructor(params: { databaseStatus: boolean }) {
      this.databaseStatus = params.databaseStatus
    }
  }
  