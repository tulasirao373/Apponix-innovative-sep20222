var fs=require('fs')
const {ProductInfo}=require('../../models')
export const  sellerUpload_Post=async(req:any,res:any)=>{
    let img=req.body.img
    let discription=req.body.discription
    let title=req.body.title
    let price=req.body.price
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
    console.log(req.files.img.name)
    var myfilename=req.files.img.name
    fs.writeFile(`./src/public/img/${myfilename}`,req.files.img.data,()=>{
        console.log('oo')
    })

    saveProductDetailsToDbService(discription,title,price,myfilename)
    res.status(200).send('uploaded')
    }
    const saveProductDetailsToDbService=(discription:any,title:any,price:any,myfilname:any)=>{

        var basePath='http://localhost:8005/img/'
        var mydata={basePath:basePath,discription:discription,title:title,price:price,img_name:myfilname}
        var productdata=new ProductInfo(mydata)
        productdata.save()
    }