const url = require('url');
//options === app.config.auth
module.exports = (options,app) => {
    return async function authMiddleware(ctx,next) {
        // 1.用户没有登录跳转到登录页面
        // 2.只有登录以后才可以访问后台管理系统
        var pathname = url.parse(ctx.request.url).pathname;
        console.log('auth.js pathname:',pathname);
        //csrf
        ctx.locals.csrf = ctx.csrf; //locals==state
        ctx.locals.prevPage = ctx.request.headers['referer'];  //获取上一页的url

        //let Authorization = ctx.request.headers['Authorization'];//获取自己定义的token验证,登陆时生成token；这里获取到的值是 'Bearer ' + token;

        if(ctx.session.userinfo){
            //如果需要验证自己定义的token在这里验证下
            // if(ctx.session.userinfo.token==Authorization.split(' ')[1]){//通过
            //     ctx.locals.userinfo = ctx.session.userinfo;
            //     await next();
            // }else{ //不通过
            //     ctx.status = 401;
            //     ctx.body = '你的当前状态已退出登陆,请重新登陆！';
            //     //ctx.redirect('/admin/login');
            // }


            ctx.locals.userinfo = ctx.session.userinfo;
            await next();

            //rbac权限判断
            // var hasAuth = await ctx.service.admin.checkAuth();
            // if(hasAuth){
            //     await next();
            // }else{
            //     ctx.status = 405;
            //     ctx.body = '你没有权限访问当前地址'
            // }
        }else{
            // 排除不需要做杼判断的页面    admin/verify?mt=0.7755167188853835
            let checkUrls=options.noneedLoginUrls||[];
            let isnoneed=checkUrls.some((item)=>{if(item==pathname) return true;});
            if(isnoneed){
                await next();
            }else{
                ctx.status = 401;
                ctx.body = '你的当前状态已退出登陆,请重新登陆！';
                //ctx.redirect('/admin/login');
            }
        }

       
    }
};