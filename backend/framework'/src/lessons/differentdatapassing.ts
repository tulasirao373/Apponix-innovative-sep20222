var express=require('express')
var app=express()
var cors=require('cors')
function middle1(req:any,res:any,next:any){
    console.log('im called advanced')
    next()
}
app.use(middle1)
app.use(cors())


app.get('/',(req:any,res:any)=>{
    res.send([{a:'apple',b:'ball'}])
})

app.get('/a',(req:any,res:any)=>{
    res.send([{a:'apple',b:'ball'}])
})



app.listen(8003,()=>{
    console.log('server started on port no 8003')
})