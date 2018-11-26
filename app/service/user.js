const Service = require('egg').Service;

class UserService extends Service {
    async create(body){
     	const mysqlClient = this.app.mysql.get('db1'); 
     	const Literal = mysqlClient.literals.Literal;
     	let psw='123456';
     	const result = await mysqlClient.insert('user',{
     		name:'user1',
     		username:'user'+Date.now(),
     		password: new Literal(`password("${psw}")`),
     		age:23,
     		update_at:mysqlClient.literals.now,
     		create_at:mysqlClient.literals.now
     	});  
     	console.log(result);
     	const insertSuccess = result.affectedRows === 1;
     	if(insertSuccess){
     		return {
     			code : 1,
     			msg:'插入成功',
     			id:result.insertId
     		};
     	}else{
	     	return {
	     		code:0,
	     		msg:'插入失败'
	     	};

     	}
    }
    async getOne(id = 1){
    	const mysqlClient = this.app.mysql.get('db1'); 
    	const result = await mysqlClient.get('user',{id:id});
    	return result;
    }
    async getAll(){
    	const mysqlClient = this.app.mysql.get('db1'); 
    	const result = await mysqlClient.select('user');
    	return result;
    }
    async getByWhere(body){
    	const mysqlClient = this.app.mysql.get('db1'); 
    	const result = await mysqlClient.select('user',{
    		where:{id:1,username:['user1']},//where条件
    		columns:['id','name','username'],//要查询的表字段
    		orders:[['create_at','desc'],['id','desc']],//排序方式
    		limit:10,//返回数据量
    		offset:0,//数据偏移量
    	});
    	return result;
    }
    async update(body){
    	const mysqlClient = this.app.mysql.get('db1'); 
    	const row = {
    		name:'user1'+Date.now(),
    		update_at:mysqlClient.literals.now,
    	};
    	const options = {
    		where:{
    			id:1
    		}
    	};

    	const result = await mysqlClient.update('user',row,options);
    	console.log(result);
     	const updateSuccess = result.affectedRows >= 1;
     	if(updateSuccess){
     		return {
     			code : 1,
     			msg:'更新成功',
     			rowNum:result.affectedRows
     		};
     	}else{
	     	return {
	     		code:0,
	     		msg:'更新失败',
     			rowNum:result.affectedRows
	     	};

     	}
    }
    async del(id = 3){
    	const mysqlClient = this.app.mysql.get('db1'); 
    	const result = await mysqlClient.delete('user',{id:id});
    	console.log(result);
     	const deleteSuccess = result.affectedRows >= 1;
     	if(deleteSuccess){
     		return {
     			code : 1,
     			msg:'删除成功',
     			rowNum:result.affectedRows
     		};
     	}else{
	     	return {
	     		code:0,
	     		msg:'删除失败',
     			rowNum:result.affectedRows
	     	};

     	}
    }



}
module.exports = UserService;