require("./config/db.config")
var {User}=require('./src/models')

// var tulasi=new User({name:'tulasi rao s',age:22,chocalate:"silk"})
// tulasi.save()
// var sira=new User({name:'sira',age:16,chocalate:"milky bar"})
// sira.save()

// User.findOne({age:16},(err:any,res:any)=>{
//     if(err)throw err
//     console.log(res)
// })   
// //this command is to read

// var sirana=new User({name:'sira 1',age:17,chocalate:"coco"})
// sirana.save()

// User.deleteOne({age:17},(err:any,res:any)=>{
//     if(err)throw err
//     console.log(res)
// }) 

User.findOneAndUpdate({age:16},{chocalate:'five star'},(err:any,res:any)=>{
    if(err)throw err
    console.log(res)
}) 

