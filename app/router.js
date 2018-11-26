module.exports = app => {
	const {router,controller} = app;
	router.get('/',controller.home.index);
	router.get('/news',controller.news.list);

	router.get('/upload',controller.upload.index);
	router.post('/upload',controller.upload.up);

	router.get('/user/new',controller.user.create);
	router.get('/user/getOne',controller.user.getOne);
	router.get('/user/getAll',controller.user.getAll);
	router.get('/user/getByWhere',controller.user.getByWhere);
	router.get('/user/update',controller.user.update);
	router.get('/user/del',controller.user.del);
};