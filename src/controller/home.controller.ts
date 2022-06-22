import { HttpStatus, VALUE_TYPE } from '@midwayjs/core';
import { Controller, Get } from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    
    const https = require('https');
    const cheerio = require("cheerio")
    let filterData = (data) => {
      console.log('整个页面', data);
      const $ = cheerio.load(data)
      return $('.id', 'lg').find('img').attr('src')

    }

   var v = '';
    v = https.createServer((req, res) => {
      let data = ''
      https.get('https://www.baidu.com/', (result) => {
        result.on('data', (chunk) => {
          data += chunk
        })

        result.on('end', () =>{
         var value =  filterData(data)
        })
      })
    })
   return v;
  }
}
