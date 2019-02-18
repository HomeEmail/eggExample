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
https://github.com/eggjs/

mz是个封装nodejs自带api，可以使用promise或者async特性写代码
stream-wormhole	将 stream 流消耗掉
await-stream-ready	文件读写流 ready 库，能够使用 await
Moment 是一个日期时间处理库 a Parse, validate, manipulate, and display dates and times in JavaScript.
ms 时间转换成毫秒 Tiny milisecond conversion utility https://npmjs.com/ms
egg-session-redis 就提供了将 Session 存储到 redis 中的能力，在应用层，我们只需要引入 egg-redis 和 egg-session-redis 插件
egg-validate 验证规则 https://github.com/node-modules/parameter

上线部署步骤：
环境部署
Node 版本为 >= 8.0.0

应用部署
1.构建
$ cd baseDir
$ npm install --production
$ tar -zcvf ../release.tgz .

2.执行
复制压缩包到部署目录解压压缩包
在部署目录，终端执行 npm start 启动应用，npm stop 停止应用
也可以直接通过 ps -eo "pid,command" | grep -- "--title=egg-server" 来找到 master 进程，并 kill 掉，无需 kill -9。

