import mysql from 'mysql'
var pool =null
var query=(sql,callback)=>{
    pool.getConnection((err,conn)=>{
        if(err){
            callback(err)
            return
        }

        conn.query(sql,(qerr,vals,fields)=>{
            conn.release();
            callback(qerr,vals,fields)

        })

    })
}

 

//空函数
function nop(a,b,c,d,e,f,g){}

//初始化
exports.init=function(config){
    pool=mysql.createPool({
        host:config.host,
        user:config.user,
        password:config.password,
        database:config.database,
        port:config.port
    })

}
//更具用户id取用户 信息
exports.getNameByUserID=function(userid,callback){
    callback=callback==null?nop:callback
    if(userid==null){
        callback(null)
        return
    }
    var sql='SELECT * FROM `t_users` WHERE `user_id`='+userid
    query(sql,(err,rows,fields)=>{
        if(err){
            callback(null)
            throw err
        }else{
            if(rows[0]){
                callback(rows)
                return
            }
        }
        console.log('未查到数据')
        callback(null)
    })
}