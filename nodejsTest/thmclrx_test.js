
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
  let result=colors.map(color => color.hex());
  console.log('color:',result);
});