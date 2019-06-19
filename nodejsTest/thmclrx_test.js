
let path = require('path');
let file=path.join(__dirname, 'test_color.jpg');
console.log('file:',file);
let thmclrx = require("thmclrx");
thmclrx.mixed(file, 8, function(err,colors){
  console.log('err:',err,'mixed color:',colors);
});