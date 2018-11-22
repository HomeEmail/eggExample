
exports.keys = 'sb';//cookie安全字符串 

exports.session = {
	key:'sid', //承载 Session 的 Cookie 键值对名字
	maxAge : 24 * 3600 * 1000, //毫秒 1天 Session 的最大有效时间
	httpOnly: true,
    encrypt: true,
};
//模板引擎
exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.tpl': 'nunjucks',
	},
};

//请求体配置
exports.bodyParser = {
	jsonLimit: '100kb', //application/json
    formLimit: '100kb', //表单 application/x-www-form-urlencoded
};
//上传文件请求体配置 //浏览器上都是通过 Multipart/form-data 格式发送文件
exports.multipart = {
	fileExtensions: [ '.apk','.mov','.doc','.docx','.xls','.xlsx','.ppt','.pptx','.dmg','.pdf' ], // 增加扩展名的文件支持
};

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