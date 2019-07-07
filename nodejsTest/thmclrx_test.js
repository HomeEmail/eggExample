
let path = require('path');
let file=path.join(__dirname, 'test_color.jpg');
console.log('file:',file);
// let thmclrx = require("thmclrx");
// thmclrx.mixed(file, 8, function(err,colors){
//   console.log('err:',err,'mixed color:',colors);
// });

const getColors = require('get-image-colors');

getColors(file).then(colors => {
  // `colors` is an array of color objects
  let result=colors.map(color => color.hex());//rgb 十六进制
  let result1=colors.map(color => color.rgb());//rgb 红绿蓝
  let result2=colors.map(color=>color.hsl());//色调，饱和度，亮度
  let result3=colors.map(color => color.temperature());//温度 0-30000
  let result4=colors.map(color=>color.hsv());//色调，饱和度，值
  console.log('color:',colors,result,result1,result2,result3,'result4',result4,colors[0]._rgb,colors[0].get('rgb.r'),colors[0].get('rgb.g'),colors[0].get('rgb.b'),'hsl()',colors[0].hsl());
});