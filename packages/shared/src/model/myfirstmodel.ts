export class MyFirstModel{
    readonly loginStatus: boolean

    constructor(params: {loginStatus:boolean}){
        this.loginStatus = params.loginStatus
    }
}