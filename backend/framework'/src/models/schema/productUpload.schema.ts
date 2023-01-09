import mongoose, { Schema } from "mongoose";


var userProduct=new Schema({
    discription:String,
    price:String,
    title:String,
    myfilename:String,
})

module.exports=mongoose.model('ProductInfo', userProduct)





// interface IRemote{color:string,shape:string,buttons:number}
// class Remote{
//     color:string;
//     shape:string;
//     buttons:number;
// constructor(propes:IRemote){
    //         this.color=propes.color
    //         this.shape=propes.shape
    //         this.buttons=propes.buttons
    //     }
    // }
    
    // var epison=new Remote({color:'red',shape:'squre',buttons:3})
    // var sumsunremotr:Remote