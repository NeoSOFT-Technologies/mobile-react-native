import { Flavor } from './flavor'
import { FlavorValues } from './flavor_values'

export interface IFlavorConfig {
  flavor: Flavor
  values: FlavorValues
}

export class FlavorConfig {
  readonly flavor: Flavor
  readonly values: FlavorValues

  private static _instance: FlavorConfig
  private static _initialized = false

  private constructor(params: IFlavorConfig) {
    this.flavor = params.flavor
    this.values = params.values
  }

  public static initialize(params: IFlavorConfig): FlavorConfig {
    if (!this._initialized) {
      FlavorConfig._instance = new FlavorConfig({ flavor: params.flavor, values: params.values })
      this._initialized = true
      return FlavorConfig._instance
    }
    return this._instance
  }

  static isProd(): boolean {
    return FlavorConfig._instance.flavor == Flavor.prod
  }

  static isQA(): boolean {
    return FlavorConfig._instance.flavor == Flavor.qa
  }

  static isDEV(): boolean {
    return FlavorConfig._instance.flavor == Flavor.dev
  }

  static instance: FlavorConfig = FlavorConfig._instance
}
