const [express,common,mysql]=[require('express'),require('../../common/common.js'),require('mysql')];
const db = mysql.createPool({host:common.dbhost,
    user:common.dbuser,
    password:common.dbpassword,
    database:dbdatabase});
module.exports = ()=>{
    var router = express.Router();
    router.post('/',(req,res)=>{
        let username = req.body.username;
        let password = common.md5(req.body.password+common.MD5_SUFFIX);
        db.query('')
    })
}