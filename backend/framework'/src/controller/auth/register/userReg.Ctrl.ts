const {UserRegInfo}=require('../../../models')
export const userReg_Post=(req:any,res:any)=>{
    var name=req.body.name
    var email=req.body.email
    var password=req.body.password
    savingUserInfoService(name,email,password)
    res.status(200).send(200)
}

const savingUserInfoService=(name:any,email:any,password:any)=>{
    console.log(name,email,password)
    var userReg=new UserRegInfo({name,email,password})
    userReg.save()
}

export const userExits=(email:any,callback:Function)=>{
    var user=UserRegInfo.findOne({email:email},(err:any,res:any)=>{
        if(err){
            console.log(err)
        }
        if(res==null){
            callback(false)
        }else{
            callback(true)
        }
    })
}