// var http =require('http')
// console.log(http)-----this code gives detail information about connections listener

var http =require('http')
console.log(http)
var url = require('url')
http.createServer((req:any,res:any)=>{
    if(req.url=='/tula'){
        res.write('hello world my self Iam Tulasi Rao S')
        res.end()
    }
}).listen(8006,()=>{console.log('server is started at port 8006')})