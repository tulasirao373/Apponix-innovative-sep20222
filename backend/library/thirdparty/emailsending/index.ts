var nodemailer=require('nodemailer')
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'tulasirao373@gmail.com',
        pass:'rxvzfzotrqckhkar'
    }
})
var maildata={
    from:'tulasirao373@gmail.com',
    to:'daluleelavathi@gmail.com',
    subject:'goody',
    text:'yenu madtha ithiya'
}
transport.sendMail(maildata,(err:any,res:any)=>{
if(err){
console.log(err)
}else{
    console.log('mail send')
}   
})
