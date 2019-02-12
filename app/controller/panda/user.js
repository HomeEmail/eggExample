const Controller = require('../../core/base_controller');
const common = require('../../common/common');
class UserController extends Controller {
	async login(){
        const ctx=this.ctx;
        //获取post过来的参数
        let param = ctx.request.body;
        //console.log('panda.user.login param:',param);
        //创建参数校验规则
        let createRule = {
            loginName: {
                type: 'string',
                required: true,//默认就是true
            },
            passwd: {
                type: 'string',
                required: true,//默认就是true
                //compare: 're-password',
            },
            verificationCode:{
                type: 'string',
                required: true,//默认就是true
            },
        };
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        ctx.validate(createRule, param);

        if(param.verificationCode.toLowerCase()!=ctx.session.captcha.toLowerCase()){
            this.failure('验证码错误！');
            return 0;
        }

        let result = await ctx.service.panda.user.getOneByName(param.loginName);//有数据时返回是个对象，查不到数据时返回是个空数组
        //console.log('service.panda.user.getOneByName:',result);

        if(!!!result.loginName){//无此用户
            this.failure('无此用户!');
            return 0;
        }
        //有此用户
        
        if(result.passwd!=common.md5(param.passwd)){//密码错误
            this.failure('密码错误！');
            return 0;
        }

    
        let data=Object.assign(
            {
                verificationCode:ctx.session.captcha,
                token:common.uuidv1(),
            },
            result
        );
		ctx.session.userinfo=data;

		this.success({data:data});
	}
	async logout(){
		const ctx=this.ctx;
		ctx.session=null;
		ctx.body='你已退出登陆';
	}

}

module.exports = UserController;