class PostModel {
    readonly title: string

    constructor(params:{title:string}){
         this.title = params.title
    }
}
export default PostModel