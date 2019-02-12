//panda业务路由

module.exports = app => {
    const {router,controller} = app;

    router.get('/system/verificationCode/getCode.utvgo',controller.captcha.index);
    router.get('/system/uploadFile/getFileProfix.utvgo',controller.panda.getFileProfix.index);

    router.post('/system/user/login.utvgo',controller.panda.user.login);

};