var MongodbClient=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/'
MongodbClient.connect(url,(err:any,db:any)=>{
    if(err) throw err
    console.log('db connected')
    var dbo=db.db('testDB')
    var tulu={name:'Tulasi',chocalate:'silk',heroin:'Rashmika',id:'123'}
    dbo.collection('test-student').insertOne(tulu,(err:any,res:any)=>{
        if(err)throw err;
        console.log('inserted data',res)
        db.close()
    // var sira={name:'sirana',chocalate:'Dairy Milk',heroin:'Kajal'}
    // dbo.collection('test-student').insertOne(sira,(err:any,res:any)=>{
    //     if(err)throw err;
    //     console.log('inserted data',res)
    //     db.close()
    })
})