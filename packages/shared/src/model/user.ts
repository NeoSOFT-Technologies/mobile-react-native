export class User{
    readonly email: string

    constructor(params:{email: string}){
        this.email = params.email
    }
}