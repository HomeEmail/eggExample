const Service = require('egg').Service;
class ImagesService extends Service {

    async getImageInfoById(id){
    	const mysqlClient = this.app.mysql.get('db1'); 
			const result = await mysqlClient.get('images',{id:id,disable:'0'});//disable:0可用，1删除
			return result||[];
    }
    
    async insertImagesRecord(obj){ //插入成功返回插入的主键id，否则返回null
        const mysqlClient = this.app.mysql.get('db1');
        const ctx=this.ctx;
        const userId=ctx.session.userinfo.userId;
        const result = await mysqlClient.insert('images',{
            ...obj,
            disable:0,
            user_id:userId,
            // createTime:mysqlClient.literals.now,
            // updateTime:mysqlClient.literals.now,
        });  
        const insertSuccess = result.affectedRows === 1;
      if(insertSuccess){
        return result.insertId;
      }else{
        return null;
      }
    }

    async insertImageColorsRecord(obj){ //插入成功返回插入的主键id，否则返回null
      const mysqlClient = this.app.mysql.get('db1');
      // const ctx=this.ctx;
      // const userId=ctx.session.userinfo.userId;
      const result = await mysqlClient.insert('image_colors',{
          ...obj,
          // createTime:mysqlClient.literals.now,
          // updateTime:mysqlClient.literals.now,
      });  
      const insertSuccess = result.affectedRows === 1;
    if(insertSuccess){
      return result.insertId;
    }else{
      return null;
    }
  }

    // async getAll(){
    // 	const mysqlClient = this.app.mysql.get('db1'); 
    // 	const results = await mysqlClient.select('sys_user');
    // 	return results||[];
    // }

    // async getAuthority(userId){
    //     const mysqlClient = this.app.mysql.get('db1'); 
    // 	//const postId = 1;
		// const results = await mysqlClient.query('SELECT au.pkId,au.authCode,au.`name`,au.url,au.pid,au.authType FROM sys_user_role_rel ur LEFT JOIN sys_role_authority_rel ra ON ur.roleId=ra.roleId LEFT JOIN sys_authority au ON au.pkId=ra.authId WHERE ur.userId=?', [userId]);
		// return results || [];
    // }
}
module.exports = ImagesService;