
var express=require('express')
var app=express()
var cors=require('cors')
var bodyParser = require('body-parser')
var path = require('path')
var ejs = require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'src/views'))

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


// app.get('/index',(req:any,res:any)=>{
//     res.send('<h1>hello</h1>')
//     })
    
//     app.get('/serverless',(req:any,res:any)=>{
//         res.redirect('http://127.0.0.1:5500/test.html')
//         })
app.use(express.static(path.join(__dirname,'src/public/img')))
app.use(express.static(path.join(__dirname,'src/public/videos')))


app.route('/')
.get((req: any, res: any) => {
    res.render('home')
}).post((req: any, res: any) => {
    res.send('hello')
}).delete((req: any, res: any) => {
    res.send('hello')
}).put((req: any, res: any) => {
    res.send('hello')
})

app.listen(8003,()=>{
    console.log('server started on port no 8003')
})