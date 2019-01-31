//模板引擎
exports.nunjucks = {
	enable:true,
	package:'egg-view-nunjucks'
};
//参数校验
exports.validate = {
	enable:true,
	package:'egg-validate',
};

exports.mysql = {
	enable:true,
	package:'egg-mysql',
};

exports.redis = {
  enable: false,
  package: 'egg-redis',
};
exports.sessionRedis = {
  enable: false,
  package: 'egg-session-redis',
};