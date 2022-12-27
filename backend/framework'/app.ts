require('dotenv').config()
require("./config/db.config")
import { express } from "./config/common.config"

var app=express()
var cors=require('cors')
var bodyParser = require('body-parser')
var path = require('path')
var ejs = require('ejs')
var endpoint=require('./src/routes')
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

app.use('/api',endpoint.homeRoute)


app.route('/')
.get((req: any, res: any) => {
    res.send('welcome')
})
app.route('*')
.get((req: any, res: any) => {

    res.send({route:404})
})




app.listen(process.env.PORT, ()=> {
    console.log('server started on port no ${process.env.PORT}')
})