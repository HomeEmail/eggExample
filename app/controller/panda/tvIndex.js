const Controller = require('../../core/base_controller');
const common = require('../../common/common');
class tvIndexController extends Controller {
	async getMenuTypes(){
		const ctx=this.ctx;
		//获取get过来的参数
        let param = ctx.query;
        //创建参数校验规则
        let createRule = {
            platformId: {
                type: 'int',
                convertType:'int',
                required: true,//默认就是true
            },
        };
        // 校验 `ctx.query` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        try{
            ctx.validate(createRule, param);
        }catch(err){
            ctx.logger.warn(err.errors);
            this.failure('参数有误！');
            return 0;
        }

        let result = await ctx.service.panda.tvIndex.getMenuTypes(param.platformId);
        //console.log('getMenuTypes:',result);

        this.success({data:result});
    }
    async getPageDatas(){
        const ctx=this.ctx;
		//获取get过来的参数
        let param = ctx.query;
        //创建参数校验规则
        let createRule = {
            typeId: {
                type: 'int',
                convertType:'int',
                required: true,//默认就是true
            },
        };
        // 校验 `ctx.query` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        try{
            ctx.validate(createRule, param);
        }catch(err){
            ctx.logger.warn(err.errors);
            this.failure('参数有误！');
            return 0;
        }

        let result = await ctx.service.panda.tvIndex.getPageDatas(param.typeId);
        //console.log('getPageDatas:',result);

        this.success({data:result});
    }
    async getPageRecordList(){
        const ctx=this.ctx;
		//获取get过来的参数
        let param = ctx.query;
        //创建参数校验规则
        let createRule = {
            typeId: {
                type: 'int',
                convertType:'int',
                required: true,//默认就是true
            },
            number: {
                type: 'int',
                convertType:'int',
                required: true,//默认就是true
            },
            pageNo: {
                type: 'int',
                convertType:'int',
                required: false,//默认就是true
                default:1,
            },
            pageSize: {
                type: 'int',
                convertType:'int',
                required: false,//默认就是true
                default:10,
            },
        };
        
        if(!!!param.pageNo||param.pageNo<=0) param.pageNo=1;
        if(!!!param.pageSize||param.pageSize<=0) param.pageSize=10;
        
        // 校验 `ctx.query` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        try{
            ctx.validate(createRule, param);
        }catch(err){
            ctx.logger.warn(err.errors);
            this.failure('参数有误！');
            return 0;
        }

        let totalCountObj=await ctx.service.panda.tvIndex.getPageRecordTotalCount(param.typeId,param.number);
        let result = await ctx.service.panda.tvIndex.getPageRecordList(param.typeId,param.number,param.pageNo,param.pageSize);
        console.log('getPageRecordList:',result);

        let totalCount=!!totalCountObj[0] ? (totalCountObj[0].totalCount||0) : 0;

        this.success({
            data:result,
            count:totalCount,
            currentPage:param.pageNo,
            currentSize:param.pageSize,
            totalPage:Math.ceil(totalCount/param.pageSize)
        });
    }

}

module.exports = tvIndexController;