var express=require('express')
var app=express()
var cors=require('cors')
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// function middle(req:any,res:any,next:any){
//     console.log('im called advanced')
//     next()
// }
// app.use(middle)

// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.post('/cars',(req:any,res:any)=>{
    console.log(req.query)
    console.log(req.body)
   
    // console.log(req.body)
    res.send('hello dear friends')
})

app.post('/cars',(req:any,res:any)=>{
    console.log(req.query.username)
    res.send(req.query.username)
})

app.get('/user/:id',(req:any,res:any)=>{
    console.log(req.params.id)
    res.send(req.params.id)
})//id is used to give unique names in [path]


// app.get('/',(req:any,res:any)=>{
//     res.send([{a:'apple',b:'ball'}])
// })

// app.get('/a',(req:any,res:any)=>{
//     res.send([{a:'apple',b:'ball'}])
// })



app.listen(8003,()=>{
    console.log('server started on port no 8003')
})