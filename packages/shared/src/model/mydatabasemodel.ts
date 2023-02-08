export class MyDatabaseModel {
  readonly title: string
  readonly body: string

  constructor(params: { title: string; body: string }) {
    this.title = params.title
    this.body = params.body
  }
}
