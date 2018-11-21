const Controller = require('egg').Controller;
const fs = require('mz/fs');
const path = require('path');

class UploadController extends Controller{
	async index(){
		//数据
		const dataList = {
			list : [
			]
		};
		await this.ctx.render('upload.tpl',dataList);
	}
	async up(){
		const {ctx} = this;
		console.log('ctx.request.body',ctx.request.body);
		//数据
		const dataList = {
			list : [
			]
		};
		let p=path.resolve(__dirname,'../../upload/');
		let toPathName='';
		if(ctx.request.files){
			console.log('got %d files',ctx.request.files.length);
			for(let file of ctx.request.files){
				console.log('--------------');
				console.log('field:'+file.fieldname);
				console.log('filename:'+file.filename);
				console.log('encoding:'+file.encoding);
				console.log('mime:'+file.mime);
				console.log('tmp filepath:'+file.filepath);

				dataList.list.push({
					filename:file.filename,
					filepath:file.filepath,
					mime:file.mime
				});

				try{
					toPathName=path.resolve(p,file.filename);
					fs.rename(file.filepath,toPathName);
				}finally{
					await fs.unlink(file.filepath);
				}

			}
		}

		await this.ctx.render('upload.tpl',dataList);
	}
}

module.exports = UploadController;