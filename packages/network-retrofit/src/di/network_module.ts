import { FoundationModule } from 'foundation'
import { ServiceBuilder } from 'ts-retrofit'

import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import RetrofitService from '../services/retrofit_service'
import NetowrkAdapter from '../network_adapter'
import { NetworkPort } from 'data'

@Singleton()
@Graph({ subgraphs: [FoundationModule] })
export class NetworkModule extends ObjectGraph {
  @Provides()
  providesRetrofitNetworkService(provideApiURL: string): RetrofitService {
    return new ServiceBuilder()
      .setEndpoint(provideApiURL)
      .setRequestInterceptors(req => {
        return req
      })
      .build(RetrofitService)
  }

  @Provides()
  providesNetworkAdapter(providesRetrofitNetworkService: RetrofitService): NetworkPort {
    return new NetowrkAdapter({
      retrofitService: providesRetrofitNetworkService
    })
  }
}
