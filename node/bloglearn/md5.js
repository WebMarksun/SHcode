const crypto = require('crypto');
var obj = crypto.createHash('md5');
obj.update('123456');
var str = obj.digest('hex');//hex16进制
console.log(str);