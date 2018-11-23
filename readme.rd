readme.rd

调试开发
npm run debug

chrome打开
chrome://inspect
添加配置
localhost:9999
点击DevTools for Node

开发运行
npm run dev

测试
npm run test

测试覆盖测试
npm run cov

库:
mz是个封装nodejs自带api，可以使用promise或者async特性写代码
stream-wormhole	将 stream 流消耗掉
await-stream-ready	文件读写流 ready 库，能够使用 await
Moment 是一个日期时间处理库 a Parse, validate, manipulate, and display dates and times in JavaScript.
ms 时间转换成毫秒 Tiny milisecond conversion utility https://npmjs.com/ms

应用部署
构建
$ cd baseDir
$ npm install --production
$ tar -zcvf ../release.tgz .

部署
Node 版本为 >= 8.0.0
