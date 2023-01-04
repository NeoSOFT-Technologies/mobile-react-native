import { Flavor } from './flavor'
import { FlavorValues } from './flavor_values'

export interface IFlavorConfig {
  flavorObj: Flavor
  values: FlavorValues
}

export class FlavorConfig {
  flavorType: Flavor
  values: FlavorValues

  private static _instance: FlavorConfig
  private static _initialized = false

  constructor(params: IFlavorConfig) {
    this.flavorType = params.flavorObj
    this.values = params.values
  }

  public static initialize(params: IFlavorConfig): FlavorConfig {
    if (!this._initialized) {
      FlavorConfig.instance = new FlavorConfig(params)
      this._initialized = true
      console.log('Falvor initliazed is ', this._initialized)
      console.log('Falvor set is ', FlavorConfig.instance.flavorType)
      return FlavorConfig._instance
    }
    return this._instance
  }

  static isProd(): boolean {
    return FlavorConfig._instance.flavorType == Flavor.prod
  }

  static isQA(): boolean {
    return FlavorConfig._instance.flavorType == Flavor.qa
  }

  static isDEV(): boolean {
    return FlavorConfig._instance.flavorType == Flavor.dev
  }

  static instance: FlavorConfig = FlavorConfig._instance
}
