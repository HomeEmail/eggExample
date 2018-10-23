
exports.keys = 'sb';//cookie安全字符串
//添加view配置
exports.view = {
	defaultViewEngine:'nunjucks',
	mapping:{
		'.tpl':'nunjucks'
	}
};