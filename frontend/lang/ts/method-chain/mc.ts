class remote{
    color:string
    buttons:string
    battery:string
    constructor(){
        this.color='red'
        this.buttons='on off button 1234'
        this.battery='2cells'
    }
    remotecolor(){
        console.log(this.color)
        return 'hello'
    }
    remoteButton(){
        console.log(this.buttons)
        return this
    }
    remotebattery(){
        console.log(this.battery)
        return this
    }
}


var myprojectremote=new remote()
console.log(myprojectremote)
myprojectremote.remoteButton().remotebattery().remotecolor()