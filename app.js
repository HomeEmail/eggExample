
module.exports = app => {
    app.beforeStart(async () => {
        app.cache={};//全局缓存对象 样例：{'/url/1':JSON.stringify({data:'here is data',disableTime:'2018-02-05 13:00:00'})}
        console.log('app beforeStart');
        // 应用会等待这个函数执行完成才启动
        // app.cities = await app.curl('http://example.com/city.json', {
        //     method: 'GET',
        //     dataType: 'json',
        // });

        // 也可以通过以下方式来调用 Service
        // const ctx = app.createAnonymousContext();
        // app.cities = await ctx.service.cities.load();
    });
    app.once('server',server => {

    });
    app.on('error',(err,ctx) => {
        //report error
    });
    app.on('request',ctx => {
        //log receive request
    });
    app.on('response',ctx => {
        //ctx.starttime is set by framework
        const used = Date.now() - ctx.starttime;
        //log total cost
        console.log('totaltime:',ctx.url,used);
    });
    app.logger.debug('app init');
};
