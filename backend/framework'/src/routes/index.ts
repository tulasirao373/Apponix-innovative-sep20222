const homeRoute=require('./home/home.routes')
const register=require('./auth/registration/user.Reg.routes')
const userlogin=require('./auth/login/login.routes')
const sellerUploadProduct=require('./seller/sellerUpload.routes')


module.exports = {homeRoute, register, userlogin, sellerUploadProduct}