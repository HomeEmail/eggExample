//panda业务路由

module.exports = app => {
    const {router,controller} = app;

    router.get('/system/verificationCode/getCode.utvgo',controller.captcha.index);
    router.get('/system/uploadFile/getFileProfix.utvgo',controller.panda.getFileProfix.index);

    router.post('/system/user/login.utvgo',controller.panda.user.login);
    router.get('/ui/tv/record/types.utvgo',controller.panda.tvIndex.getMenuTypes);// /ui/tv/record/types.utvgo?platformId=0
    router.get('/ui/tv/record/page.utvgo',controller.panda.tvIndex.getPageDatas);// /ui/tv/record/page.utvgo?typeId=1
    router.get('/ui/tv/record/list.utvgo',controller.panda.tvIndex.getPageRecordList);// /ui/tv/record/list.utvgo?templateId=1&typeId=1&number=1&pageNo=1&pageSize=10

};