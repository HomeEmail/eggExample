const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1 ){
        //read config
        const { serverUrl,pageSize} = this.config.news;
        //use build-in http client to GET hacker-news api
        //把返回结果的data字段赋值给变量idList
        const {data:idList} = await this.ctx.curl(`${serverUrl}/topstories.json`,{
            data:{
                orderBy:'"$key"',
                startAt:`"${pageSize * (page -1)}"`,
                endAt:`"${pageSize*page-1}"`
            },
            dataType:'json'
        });

        //parallel get detail
        const newsList = await Promise.all(
            Object.keys(idList).map(key => {
                const url = `${serverUrl}/item/${idList[key]}.json`;
                return this.ctx.curl(url,{dataType:'json'});
            })
        );
        return newsList.map(res => res.data);
    }
}
module.exports = NewsService;