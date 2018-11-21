module.exports = app => {
	const {router,controller} = app;
	router.get('/',controller.home.index);
	router.get('/news',controller.news.list);

	router.get('/upload',controller.upload.index);
	router.post('/upload',controller.upload.up);
};