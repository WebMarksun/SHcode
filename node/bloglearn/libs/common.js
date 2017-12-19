const crypto = require('crypto');

module.exports = {
    //md5对密码加密
    MD5_SUFFIX:'FDljkdjaf2343$$**&&*(&^&^jhhkhjhHJHGHJGHGJGH&*7*&87*^*&^jlkjafdfajLJHGHJGkj&*',
    md5:function(str){
        var obj = crypto.createHash('md5');
        obj.update(str);
        return obj.digest('hex');
    }
}