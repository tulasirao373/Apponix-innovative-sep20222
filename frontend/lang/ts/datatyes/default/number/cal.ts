// static calculator

var a:number=10
var b:number=20
console.log(a+b)
function myadd(){
    
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value

    console.log(parseInt(val1)+parseInt(val2) )
}

function mysub(){
    
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value

    console.log(parseInt(val1)-parseInt(val2) )
}

function mymul(){
    
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value

    console.log(parseInt(val1)*parseInt(val2) )
}

function mydiv(){
    
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value

    console.log(parseInt(val1)/parseInt(val2) )
}