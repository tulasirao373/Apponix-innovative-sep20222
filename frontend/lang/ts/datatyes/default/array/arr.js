var arr = 'goa';
var arr1 = 'balo';
var arr2 = 'cassy';
var myarry = ['goa', 'balo', 'cassy'];
console.log(arr1);
console.log(myarry[1]);
//destructring 
var goa = myarry[0], balo = myarry[1], cassy = myarry[2];
console.log(goa);
var myobj = {};
var myproducts = ['goa', 'balo', 'cassy'];
myproducts.map(function (myitem) { console.log(myitem); });
var obj1 = { a: 10, b: 'ball', c: 'cat' };
var obj2 = { a: 10, b: 'ball', c: 'cat', d: 'dog' };
var obj3 = { a: 10, b: 'ball', e: 'elephant' };
var myarray1 = [obj1, obj2, obj3];
console.log(myarray1);
var j=myarray1.find(function (myit) {return myit.c=='cat' });
console.log(j)
var j1=myarray1.filter(function (myit) {return myit.c=='cat' });
console.log(j1)