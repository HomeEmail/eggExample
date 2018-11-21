const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index(){
		const ctx=this.ctx;
		//console.log('cookie',this.ctx.cookies);
		//console.log('session',this.ctx.session);

		let count = ctx.cookies.get('count');
	    count = count ? Number(count) : 1;
	    ctx.cookies.set('count', ++count); //只有明确使用set设置的cookie才能用get获取到

		ctx.session.visited = ctx.session.visited ? ++ctx.session.visited : 1;
		//设置了session 在cookie里就有个加密的键值对key是sid

		this.ctx.body = 'Hello world! count:'+ctx.cookies.get('count')+' ctx.session.visited:'+ctx.session.visited;

	}
}

module.exports = HomeController;