import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    var start = new Date().getTime;
    const result = await createHttpRequest(app).get('/');
    var end = new Date().getTime;
    var time = 0;
     time = end - start;

     expect(time).toBe(1);
    // use expect by jest
    expect(result.text).toBe('//www.baidu.com/img/bd_logo1.png');

    // close app
    await close(app);
  });

});
