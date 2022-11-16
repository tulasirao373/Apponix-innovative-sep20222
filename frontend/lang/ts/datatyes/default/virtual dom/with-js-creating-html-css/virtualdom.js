// virtual dom
// var h1=document.createElement('h1')
// h1.innerHTML='hello im virtually attached';
// (document.getElementById('root') as HTMLDivElement).appendChild(h1)
function myheading(mydata) {
    var h1 = document.createElement('h1');
    h1.innerHTML = mydata;
    h1.style.color = 'blue';
    document.getElementById('root').appendChild(h1);
}
myheading('gosdhar');
myheading('haria');
myheading('sira');
