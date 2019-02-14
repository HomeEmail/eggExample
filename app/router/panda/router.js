//panda业务路由

module.exports = app => {
    const {router,controller} = app;

    router.get('/system/verificationCode/getCode.utvgo',controller.captcha.index);
    router.get('/system/uploadFile/getFileProfix.utvgo',controller.panda.getFileProfix.index);

    router.post('/system/user/login.utvgo',controller.panda.user.login);
    router.get('/ui/tv/record/types.utvgo',controller.panda.tvIndex.getMenuTypes);// /ui/tv/record/types.utvgo?platformId=0
    router.get('/ui/tv/record/page.utvgo',controller.panda.tvIndex.getPageDatas);// /ui/tv/record/page.utvgo?typeId=1
    router.get('/ui/tv/record/list.utvgo',controller.panda.tvIndex.getPageRecordList);// /ui/tv/record/list.utvgo?templateId=1&typeId=1&number=1&pageNo=1&pageSize=10
    router.get('/ui/tv/record/insert.utvgo',controller.panda.tvIndex.insertPageRecord);// ui/tv/record/insert.utvgo?priority=&name=&href=&imgUrl=&typeId=1&number=2&vodId=&ableTime=2019-02-14+09:20:28&disableTime=2021-02-26+09:20:30&templateId=1
    router.post('/system/uploadFile/image.utvgo',controller.panda.upload.up);// /system/uploadFile/image.utvgo?file
    router.get('/ui/tv/record/audite.utvgo',controller.panda.tvIndex.auditePageRecord);// /ui/tv/record/audite.utvgo?id=109&status=1
    router.get('/ui/tv/record/delete.utvgo',controller.panda.tvIndex.deletePageRecord);// /ui/tv/record/delete.utvgo?id=109
    router.get('/ui/tv/record/update.utvgo',controller.panda.tvIndex.updatePageRecord);// /ui/tv/record/update.utvgo?id=14&name=&typeId=1&number=1&priority=0&imgUrl=&vodId=&href=&ableTime=2018-02-25+21:22:32&disableTime=2099-02-25+21:22:32&typeName=&templateId=1

};