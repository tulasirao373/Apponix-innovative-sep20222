// console.log(1)
// setTimeout(()=>{console.log(2)},2000)
// console.log(3)
var initialstate = 0;
var initialstateofminutes = 0;
setInterval(function () {
    console.log("sec:", initialstate++, "minutes:", initialstateofminutes, "hours");
    if (initialstate == 10) {
        initialstateofminutes++;
        console.log("minute:", initialstateofminutes);
    }
}, 1000);
