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

//it lookes at strtingand ending in between u can give anyththing
// app.get('/c*ars',(req:any,res:any)=>{
//     res.send('hello')
// })

// app.get('/ca?rs',(req:any,res:any)=>{
//     res.send('hello')
// })
//multiple path
// app.get('/api/cars',(req:any,res:any)=>{
//     res.send('hello')
// })
// app.get('/ca+rs',(req:any,res:any)=>{
//     res.send('hello')
// })
// app.get('/cars/:id/:name',(req:any,res:any)=>{
//     res.send('hello')
// })

app.listen(8003,()=>{
    console.log('server started on port no 8003')
})