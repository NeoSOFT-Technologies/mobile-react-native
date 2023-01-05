export interface IAppSecrets {
  thirdpartyApiKey: string
}

export class AppSecrets {
  readonly thirdpartyApiKey: string

  constructor(params: IAppSecrets) {
    this.thirdpartyApiKey = params.thirdpartyApiKey
  }

  static get appSecretsDev(): AppSecrets {
    return new AppSecrets({
      thirdpartyApiKey: 'String'
    })
  }

  static get appSecretsQA(): AppSecrets {
    return new AppSecrets({
      thirdpartyApiKey: 'String'
    })
  }

  static get appSecretsProd(): AppSecrets {
    return new AppSecrets({
      thirdpartyApiKey: 'String'
    })
  }
}
