let arr='goa'
let arr1='balo'
let arr2='cassy'
let myarry=['goa','balo','cassy']
console.log(arr1)
console.log(myarry[1])
//destructring 
let [goa,balo,cassy]=myarry
console.log(goa)

var myobj={}
let myproducts=['goa','balo','cassy']
myproducts.map((myitem)=>{console.log(myitem)})

var obj1={a:10,b:'ball',c:'cat'}
var obj2={a:10,b:'ball',c:'cat',d:'dog'}
var obj3={a:10,b:'ball',e:'elephant'}
var myarray1=[obj1,obj2,obj3]
console.log(myarray1)
myarray1.find((myit)=>{console.log(myit)})