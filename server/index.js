'use strict'
var path = require('path')
var express = require('express')
var ejs = require('ejs')

var co = require('co');
var OSS = require('ali-oss');
var port = "8188"

var app = express()

// setCrossDomain(req,
//     res, next) {
//     res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since')
//     res.append('Access-Control-Allow-Credentials', 'true')
//     res.append('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE')
//     res.append('X-Powered-By', '3.2.1')
//     res.append('Content-Type', 'application/json;charset=utf-8')
//     next()
// }
// app.use(setCrossDomain)
module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var client = new OSS({
        region: '<Your region>',
        accessKeyId: '<Your AccessKeyId>',
        accessKeySecret: '<Your AccessKeySecret>'
    });
    // 获取token
    app.get('/alioss/listBucket', function(req, res) {
        res.append('Access-Control-Allow-Origin', '*')
        co(function*() {
            var result = yield client.listBuckets();
            console.log(result);
            console.log(result);
        }).catch(function(err) {
            console.log(err);
        });
    })

    console.log('Listening at http://localhost:' + port + '\n')
})