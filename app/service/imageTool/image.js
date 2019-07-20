const Service = require('egg').Service;
const getColors = require('get-image-colors');
const stream = require('stream');

class ImageService extends Service {

    // async getOneByName(username){
    // 	const mysqlClient = this.app.mysql.get('db1'); 
		// 	const result = await mysqlClient.get('user',{username:username,disable:'0'});//disable:0可用，1删除
		// 	return result||[];
    // }
    async getColor(image){
      let r=getColors(image);//图片在硬盘的位置 或者是buffer const buffer = fs.readFileSync(path.join(__dirname, 'double-rainbow.gif'))
      let colors=[];
      try{
        colors = await r.then();//colors:5个颜色的数组
      } catch (error){
        console.log(error);
        return null;
      }
      // `colors` is an array of color objects
      let result=colors.map(color => color.hex());//rgb 十六进制
      // let result1=colors.map(color => color.rgb());//rgb 红绿蓝
      // let result2=colors.map(color=>color.hsl());//色调，饱和度，亮度
      // let result3=colors.map(color => color.temperature());//温度 0-30000
      let result4=colors.map(color=>color.hsv());//色调，饱和度，值
      //console.log('color:',colors,result,result1,result2,result3,'result4',result4,colors[0]._rgb,colors[0].get('rgb.r'),colors[0].get('rgb.g'),colors[0].get('rgb.b'),'hsl()',colors[0].hsl());
      console.log('image color', result, result4);
      return {
        hsv:result4,
        hex:result,
      };
    }
    async streamToBuffer(part){ //无效，不懂为什么
      return new Promise((resolve, reject) => {
        try{
          let converter = new stream.Writable();
          converter.data = []; // We'll store all the data inside this array
          converter._write = function (chunk, enc, next) {
            this.data.push(chunk);
            next();
          };
          converter.on('finish', function() { // Will be emitted when the input stream has ended, ie. no more data will be provided
            const b = Buffer.concat(this.data); // Create a buffer from all the received chunks
            // Insert your business logic here
            resolve(b);
          });
          converter.on('pipe', function(src){
            console.log(src);
          });
          converter.on('error', function(err){
            reject(err);
          });
          part.pipe(converter);
        }catch(err){
          reject(err);
        }
      });
    }
}
module.exports = ImageService;