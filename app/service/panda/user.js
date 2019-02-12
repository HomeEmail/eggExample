const Service = require('egg').Service;
class UserService extends Service {

    async getOneByName(loginName){
    	const mysqlClient = this.app.mysql.get('db1'); 
		const result = await mysqlClient.get('sys_user',{loginName:loginName,status:'0'});//status:0可用，1删除
		return result||[];
    }

    async getAll(){
    	const mysqlClient = this.app.mysql.get('db1'); 
    	const result = await mysqlClient.select('sys_user');
    	return result||[];
    }


}
module.exports = UserService;