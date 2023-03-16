import { PostParams } from './../../../../domain/src/usecases/first/post_usecase'
import { DomainModule } from './../../../../domain/src/di/domain_module'
import { put } from 'redux-saga/effects'
import { REQUEST_POST } from './action'
import { Obsidian } from 'di'

function* postsaga() {
  console.log('saga')
  const data = yield Obsidian.obtain(DomainModule).postusecase().execute(new PostParams())
  console.log(JSON.stringify(data))
  put({ type: REQUEST_POST.REQUEST_POST_SUCCESS, payload: data })
}
export default postsaga
