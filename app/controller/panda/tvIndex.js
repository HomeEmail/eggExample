const Controller = require('../../core/base_controller');
//const common = require('../../common/common');
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
            ctx.logger.warn(err.message);
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
            ctx.logger.warn(err.message);
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
            ctx.logger.warn(err.message);
            this.failure('参数有误！');
            return 0;
        }

        let totalCountObj=await ctx.service.panda.tvIndex.getPageRecordTotalCount(param.typeId,param.number);
        let result = await ctx.service.panda.tvIndex.getPageRecordList(param.typeId,param.number,param.pageNo,param.pageSize);
        //console.log('getPageRecordList:',result);

        let totalCount=!!totalCountObj[0] ? (totalCountObj[0].totalCount||0) : 0;

        this.success({
            data:result,
            count:totalCount,
            currentPage:param.pageNo,
            currentSize:param.pageSize,
            totalPage:Math.ceil(totalCount/param.pageSize)
        });
    }

    async insertPageRecord(){
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
            priority: {
                type: 'int',
                convertType:'int',
                required: false,//默认就是true
                default:0,
            },
            name: {
                type: 'string',
                convertType:'string',
                required: true,//默认就是true
                default:'',
            },
            href: {
                type: 'string',
                convertType:'string',
                required: false,//默认就是true
                default:'',
            },
            imgUrl: {
                type: 'string',
                convertType:'string',
                required: false,//默认就是true
                default:'',
            },
            vodId: {
                type: 'string',
                convertType:'string',
                required: false,//默认就是true
                default:'',
            },
            ableTime: {
                type: 'dateTime',
                convertType:'string',
                required: true,//默认就是true
                default:new Date()
            },
            disableTime: {
                type: 'dateTime',
                convertType:'string',
                required: true,//默认就是true
                default:new Date()
            },
        };
        
        if(!!!param.priority||param.priority<=0) param.priority=0;
        if(typeof param.templateId != undefined) delete param.templateId;

        // 校验 `ctx.query` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        try{
            ctx.validate(createRule, param);
        }catch(err){
            ctx.logger.warn(err.message);
            this.failure('参数有误！');
            return 0;
        }

        let insertId=await ctx.service.panda.tvIndex.insertPageRecord(param);
        //console.log('insertPageRecord:',insertId);
        if(!!insertId){
            this.success();
        }else{
            this.failure('插入失败，insertId null');
        }
        
    }

}

module.exports = tvIndexController;