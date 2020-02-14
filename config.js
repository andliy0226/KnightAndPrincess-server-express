var CLIENT_PORT = "7998";
var GAME_PORT = "7999";
var CLIENT_IP = "localhost";
var ACCOUNT_KEY = "*&^&*()&^&11";


exports.userServer = function(){
    return {
        CLIENT_PORT : CLIENT_PORT,
        CLIENT_IP : CLIENT_IP,
        VERSION_NUMBER : "20171202",
    }

}
exports.gameServer = function(){
        return {
            CLIENT_PORT : "9000",
            CLIENT_IP : CLIENT_IP,
            VERSION_NUMBER : "20171202",
        }
    
    }

// export function userServer(){
//     return {
//         CLIENT_PORT : CLIENT_PORT,
//         CLIENT_IP : CLIENT_IP,
//         VERSION_NUMBER : "NaNa",
//     }

// }

// //游戏服务器
// export function gameServer(){
//         return {
//             CLIENT_PORT : GAME_PORT,
//             CLIENT_IP : CLIENT_IP,
//             VERSION_NUMBER : "20200214",
//         }
// }
    

// export function mysql(){
//     return {
//         HOST : "127.0.0.1",
//         USER : "root",
//         PASSWORD : "123456",
//         DBNAME : "a_study_lmsd",
//         PORT : 3306,
//     }
// }

// export function redis(){
//     return {
//         host : "127.0.0.1",
//         port : 6379,
//         db: 0,
//     }
// }