export class UserCheckModal {
   readonly username?: string
  
    constructor(params?: {username:string}) {
      this.username = params.username
    }
  }