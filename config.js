var CLIENT_PORT = "7998";
var GAME_PORT = "7999";
var CLIENT_IP = "localhost";
var ACCOUNT_KEY = "*&^&*()&^&11";


exports.userServer = function(){
    return {
        CLIENT_PORT : CLIENT_PORT,
        CLIENT_IP : CLIENT_IP,
        VERSION_NUMBER : "NaNa",
    }

}
exports.gameServer = function(){
        return {
            CLIENT_PORT : GAME_PORT,
            CLIENT_IP : CLIENT_IP,
            VERSION_NUMBER : "20200214",
        }
    
    }

    
exports.mysql = function(){
    return {
        host : "127.0.0.1",
        user : "root",
        password : "aloney00",
        database : "game_data",
        port : 3306,
    }
}

exports.redis=function(){
    return {
        host : "127.0.0.1",
        port : 6379,
        db: 0,
    }

}