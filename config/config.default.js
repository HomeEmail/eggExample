const path = require('path');
module.exports = appInfo => {
	return {
		keys:'sb',//cookie安全字符串 
		session : {
			key:'sid', //承载 Session 的 Cookie 键值对名字
			maxAge : 24 * 3600 * 1000, //毫秒 1天 Session 的最大有效时间
			httpOnly: true,
		    encrypt: true,
		},
		view : { //模板引擎
			defaultViewEngine: 'nunjucks',
			mapping: {
				'.tpl': 'nunjucks',
			},
		},
		bodyParser : { //请求体配置
			jsonLimit: '100kb', //application/json
		    formLimit: '100kb', //表单 application/x-www-form-urlencoded
		},
		multipart : { //上传文件请求体配置 //浏览器上都是通过 Multipart/form-data 格式发送文件
			fileExtensions: [ '.apk','.mov','.doc','.docx','.xls','.xlsx','.ppt','.pptx','.dmg','.pdf' ], // 增加扩展名的文件支持
		},
		mysql : {
			clients:{
				// clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
				db1:{
					host:'localhost',
					port:'3306',
					user:'root',
					password:'123456',
					database:'test',
				}
			},
			// 所有数据库配置的默认值
			default:{
				
			},
			//是否加载到 app 上，默认开启
			app:true,
			//是否加载到 agent 上，默认关闭
			agent:false,
		},

		middleware : [ //在配置众中引入中间件,添加如下中间件，数组顺序即为中间件的加载顺序
			'robot',
			'gzip',
			'auth',
		],
		//框架和插件中使用中间件样例
		//app.config.coreMiddleware.unshift('gzip');
		//router 中使用中间件样例，只想针对单个路由生效，可以直接在 app/router.js 中实例化和挂载
		// const gzip = app.middleware.gzip({ threshold: 1024 });
		// app.router.get('/needgzip', gzip, app.controller.handler);

		// 无论是应用层加载的中间件还是框架自带中间件，都支持几个通用的配置项：
		// enable：控制中间件是否开启。
		// match：设置只有符合某些规则的请求才会经过这个中间件。
		// ignore：设置符合某些规则的请求不经过这个中间件。

		//robot's configurations 禁止哪些爬虫访问
		robot : {
			enable:false,//是否启用
			ua:[
				/Baiduspider/i
			]
		},
		//gzip 中间件配置
		gzip : {
			enable:false,//是否启用
			threshold:512, // 小于 0.5k 的响应体不压缩
		},
		auth : {
			enable:true,//是否启用
			noneedLoginUrls : ['/','/login','/logout','/captcha'],
		},



		//添加 news 的配置项
		news : {
			pageSize:5,
			serverUrl:'https://hacker-news.firebaseio.com/v0'
		},
		//上传文件路径前缀
		uploadBasePath:path.join(appInfo.root,'upload'),
	};
};


