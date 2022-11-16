interface Iglass{
    frame:string,
    shape:string,
    color:string,
[key:string]:string
}


var glass1:Iglass = {
    frame:'square',
    shape:'square',
    color:'red'
};
console.log(glass1);
glass1.11='yes'