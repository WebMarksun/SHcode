const common = require('./libs/common');
var str = common.md5('123456'+common.MD5_SUFFIX);
console.log(str);