//image_tool业务路由
module.exports = app => {
  const {router,controller,config} = app;
  let customCacheConfig=config.customCache||{};
  let projectRunName=!!config.projectRunName?'/'+config.projectRunName:'';
  router.get(projectRunName+'/',controller.home.index);
  router.get(projectRunName+'/captcha',controller.captcha.index);
  router.get(projectRunName+'/loginKey',controller.loginKey.index);

  router.get(projectRunName+'/upload',controller.upload.index);
	router.post(projectRunName+'/upload',controller.upload.up);
  
  router.post(projectRunName+'/login',controller.panda.user.login);
  router.post(projectRunName+'/logout',controller.panda.user.logout);// /system/user/logout.utvgo

};