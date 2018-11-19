
exports.keys = 'sb';//cookie安全字符串

//添加view配置
exports.view = {
	defaultViewEngine:'nunjucks',
	mapping:{
		'.tpl':'nunjucks'
	}
};

//添加 news 的配置项
exports.news = {
	pageSize:5,
	serverUrl:'https://hacker-news.firebaseio.com/v0'
};

//在配置众中引入中间件,添加如下中间件，数组顺序即为中间件的加载顺序
exports.middleware = [
	'robot',
	'gzip'
];
//框架和插件中使用中间件样例
//app.config.coreMiddleware.unshift('gzip');

//router 中使用中间件样例，只想针对单个路由生效，可以直接在 app/router.js 中实例化和挂载
// const gzip = app.middleware.gzip({ threshold: 1024 });
// app.router.get('/needgzip', gzip, app.controller.handler);


//robot's configurations 禁止哪些爬虫访问
exports.robot = {
	ua:[
		/Baiduspider/i
	]
};
//gzip 中间件配置
exports.gzip = {
	threshold:1024, // 小于 1k 的响应体不压缩
};