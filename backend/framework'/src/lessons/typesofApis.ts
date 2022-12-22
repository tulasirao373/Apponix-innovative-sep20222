var express=require('express')
var app=express()


app.get('/flight',(req:any,res:any)=>{
    res.send('enjoy the party')
})

app.post('/user',(req:any,res:any)=>{
    res.send('apponix student post')
})
app.delete('/user',(req:any,res:any)=>{
    res.send('apponix student delete')
})
app.put('/user',(req:any,res:any)=>{
    res.send('apponix student put')
})
app.get('/user',(req:any,res:any)=>{
    res.send('apponix student get')
})


app.get('/song',(req:any,res:any)=>{
    var song='<iframe width="1280" height="900" src="https://www.youtube.com/embed/5BQQM4uvRkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    res.send(song)
})

app.listen(8003,()=>{
    console.log('server started on port no 8003')
})