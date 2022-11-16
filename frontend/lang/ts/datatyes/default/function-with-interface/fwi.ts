function marriages(props:Imarriages){
    console.log(props)
}
marriages({gift1:'bomb',gift2:100})
marriages({gift1:'bomb'})

interface Imarriages{
    gift1:string,
    gift2?:number
}