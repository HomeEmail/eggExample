const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');

class CaptchaController extends Controller {
	async index(){ //获得验证码
		const ctx=this.ctx;
		
		const c =svgCaptcha.create({ //普通验证码
			size:4,
			noise:2,
			color:true,
			background:'#dddddd',
			width:80,
			height:40,
			fontSize:30
		}); //返回 {data: '<svg.../svg>', text: 'abcd'}

		// const cc=svgCaptcha.createMathExpr({ //算术验证码
		// 	size:4,
		// 	noise:2,
		// 	color:true,
		// 	background:'#dddddd',
		// 	width:80,
		// 	height:40,
		// 	fontSize:26
		// });

		console.log('captcha',c.text.toLowerCase());
		ctx.session.captcha = c.text.toLowerCase();
		ctx.set('Content-Type', 'image/svg+xml;charset=UTF-8');
		ctx.body = c.data;

	}
}

module.exports = CaptchaController;