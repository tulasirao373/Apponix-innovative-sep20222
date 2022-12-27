function middle2(req:any,res:any,next:any){
    console.log('im called adveded')
    next()
    }//it lookes at strtingand ending in between u can give anyththing
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