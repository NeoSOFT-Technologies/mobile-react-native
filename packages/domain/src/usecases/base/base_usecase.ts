import { Params } from './params'

export abstract class BaseUseCase<P extends Params, T> {
  abstract execute(params: P): void
}

export abstract class FutureUseCase<P extends Params, T> extends BaseUseCase<P, T> {
  abstract execute(params: P): Promise<T>
}

//TODO: TO support using RxTS
/* abstract class StreamUseCase<P extends Params, T> extends BaseUseCase<P, T> {
  abstract execute(params: P): Promise<T>
} */
