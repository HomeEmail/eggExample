const Service = require('egg').Service;
class tvIndexService extends Service {

    async getMenuTypes(platformId){
        const mysqlClient = this.app.mysql.get('db1'); 
		const results = await mysqlClient.query('SELECT pkId as typeId,typeName,templateId FROM utvgo_tv_index_type WHERE platformId=? and `status`=1 ORDER BY priority DESC', [platformId]);//状态（0待审核，1审核通过，2审核不通过）
		return results || [];
    }

    async getPageDatas(typeId){
        const mysqlClient = this.app.mysql.get('db1');
        const results = await mysqlClient.query('SELECT t.* from (SELECT href,imgUrl,`name`,number,typeId,vodId FROM utvgo_tv_index_record WHERE typeId=? AND `status`=1 AND NOW()>ableTime AND NOW()<disableTime GROUP BY number ORDER BY priority DESC) as t ORDER BY t.number ASC',[typeId]);//状态（0待审核，1审核通过，2审核不通过，3已下架）
        return results || [];
    }

    async getPageRecordTotalCount(typeId,number){
        const mysqlClient = this.app.mysql.get('db1');
        const result = await mysqlClient.query('SELECT COUNT(pkId) as totalCount FROM utvgo_tv_index_record WHERE typeId=? AND number=? AND `status`!=3',[typeId,number]);
        return result||0;
    }
    async getPageRecordList(typeId,number,pageNo=1,pageSize=10){
        const mysqlClient = this.app.mysql.get('db1');
        let offset=(pageNo-1)*10;//偏移值
        const results = await mysqlClient.query('SELECT *,pkId as id FROM utvgo_tv_index_record WHERE pkId<=(SELECT pkId FROM utvgo_tv_index_record WHERE typeId=? AND number=? AND `status`!=3 ORDER BY pkId DESC LIMIT ?,1) and typeId=? AND number=? AND `status`!=3 ORDER BY priority DESC,pkId DESC LIMIT ?',[typeId,number,offset,typeId,number,pageSize]);
        return results||[];
    }
    async insertPageRecord(obj){ //插入成功返回插入的主键id，否则返回null
        const mysqlClient = this.app.mysql.get('db1');
        const ctx=this.ctx;
        const userName=ctx.session.userinfo.loginName;
        const result = await mysqlClient.insert('utvgo_tv_index_record',{
            ...obj,
            status:0,
            createTime:mysqlClient.literals.now,
            updateTime:mysqlClient.literals.now,
            auditeTime:'',
            createBy:userName,
            editeBy:userName,
            auditBy:'',
        });  
        const insertSuccess = result.affectedRows === 1;
     	if(insertSuccess){
     		return result.insertId;
     	}else{
	     	return null;
     	}
    }


}
module.exports = tvIndexService;