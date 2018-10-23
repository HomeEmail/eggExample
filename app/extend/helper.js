//一种快速扩展的方式

const moment = require('moment');
//相对于现在过去多少时间的一个语言描述
exports.relativeTime = time => moment(new Date(time*1000)).fromNow();


