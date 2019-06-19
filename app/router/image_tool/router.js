//image_tool业务路由
module.exports = app => {
  const {router,controller,config} = app;
  let customCacheConfig=config.customCache||{};
  let projectRunName=!!config.projectRunName?'/'+config.projectRunName:'';
  router.get(projectRunName+'/imageTool/captcha',controller.captcha.index);
  
  router.post(projectRunName+'/imageTool/login',controller.panda.user.login);
  router.post(projectRunName+'/imageTool/logout',controller.panda.user.logout);// /system/user/logout.utvgo

};