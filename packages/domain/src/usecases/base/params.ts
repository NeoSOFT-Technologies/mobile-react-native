export interface IParams {
  reloading?: boolean
}

export abstract class Params {
  reloading?: boolean

  constructor({ reloading = false }: IParams) {
    this.reloading = reloading
  }

  abstract verify(): boolean
}
