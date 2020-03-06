// var cfg = require(process.argv[2])

var  file=process.argv[2]
console.log("配置文件::-->"+file)
var cfg=require(file)
var config = cfg.gameServer()

var db = require("../../utils/db")
db.init(cfg.mysql())

// var redisConfig = cfg.redis();
// var cityRedis = require("../../redis/cityRedis");
// cityRedis.connect(redisConfig);

import { start } from "./gameServer.js"
// var us = require("./gameServer.js");
start(config)
console.log("test-->http://localhost:"+config.CLIENT_PORT+"/test")