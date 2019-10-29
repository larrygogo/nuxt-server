import {controller, get} from "../lib/Core";
import ServerException from '../exception/ServerException'

@controller('/api')
export class Test {

  @get('/hello')
  async test(ctx, next) {
      // throw new ServerException({status: 403, msg: '拒绝访问'})
      ctx.body = 'hello world'
  }
}
