// image_tool业务路由
module.exports = app => {
  const {router,controller,config} = app;
  let customCacheConfig=config.customCache||{};
  let projectRunName=!!config.projectRunName?'/'+config.projectRunName:'';
  // router.get(projectRunName+'/',controller.home.index);
  router.get(projectRunName+'/api/captcha',controller.captcha.index);
  router.get(projectRunName+'/api/loginKey',controller.loginKey.index);

  // router.get(projectRunName+'/api/upload',controller.imageTool.upload.index);
	router.post(projectRunName+'/api/upload',controller.imageTool.upload.up);
  
  router.post(projectRunName+'/api/login',controller.imageTool.user.login);
  router.post(projectRunName+'/api/logout',controller.imageTool.user.logout);// /system/user/logout.utvgo

};