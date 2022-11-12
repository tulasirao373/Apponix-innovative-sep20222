var sum = function () { console.log('iam a sum'); };
sum();
function parent1(num, myfunc) {
    console.log(num);
    console.log(myfunc);
    myfunc();
    return 5;
}
parent1(2, sum);
