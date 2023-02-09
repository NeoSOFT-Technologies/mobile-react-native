interface IResource<T> {
  readonly status: Status
  readonly data?: T
  readonly error?: any
}

export class Resource<T> {
  readonly status: Status
  readonly data?: T
  readonly error?: any

  private constructor(params: IResource<T>) {
    this.status = params.status
    this.data = params.data
    this.error = params.error
  }

  static none<T>(): Resource<T> {
    return new Resource<T>({ status: Status.none, data: null })
  }

  static loading<T>(params?: { data?: T; type: string }): Resource<T> {
    return new Resource<T>({ status: Status.loading, data: params.data })
  }

  static reloading<T>(params?: { data?: T }): Resource<T> {
    return new Resource<T>({ status: Status.reloading, data: params.data })
  }

  static success<T>(params: { data?: T }): Resource<T> {
    return new Resource<T>({ status: Status.success, data: params.data })
  }

  static error<T>(params: { data?: T; error?: any }): Resource<T> {
    return new Resource<T>({ status: Status.error, data: params.data, error: params.error })
  }
}
