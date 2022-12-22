var MomgodbClient=require('mongodb').MongoClient;
var db_server_url="mongodb://127.0.0.1:27017/"
MomgodbClient.connect(db_server_url,(err:any,db:any)=>{
    if(err) throw err
    console.log('db connected')
    var dbo=db.db('testDB')
    var myid={id:"123"}
    var myobj2={$set:{name:'tula',chocalate:'dairy silk',heroin:'urvashi'}}
    dbo.collection('test-student').updateOne(myid,myobj2,(err:any,res:any)=>{
        if(err)throw err
        console.log('value upadted')
        db.close()
    })
})