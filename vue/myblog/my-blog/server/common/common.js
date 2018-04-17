const crypto = require('crypto');
module.exports = {
    dbhost:'localhost',
    dbuser:'root',
    dbpassword:'s871825849',
    dbdatabase:'blogserver',
    MD5_SUFFIX:'jfklajJKJHHJjk&^7bgv&……有能耐你就解开看看99JLjfdkajfkl&*&*',
    md5:function(str){
        var obj = crypto.createHash("md5");
        obj.update(str);
        return obj.digest('hex');
    }
}

// var MD5_SUFFIX = 'jfklajJKJHHJjk&^7bgv&……有能耐你就解开看看99JLjfdkajfkl&*&*',
// str = '871825849';


//         var obj = crypto.createHash("md5");
//         obj.update(str+MD5_SUFFIX);
//         console.log(obj.digest('hex'));