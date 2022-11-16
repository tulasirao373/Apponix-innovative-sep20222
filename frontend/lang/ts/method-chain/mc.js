var remote = /** @class */ (function () {
    function remote() {
        this.color = 'red';
        this.buttons = 'on off button 1234';
        this.battery = '2cells';
    }
    remote.prototype.remotecolor = function () {
        console.log(this.color);
        return 'hello';
    };
    remote.prototype.remoteButton = function () {
        console.log(this.buttons);
        return this;
    };
    remote.prototype.remotebattery = function () {
        console.log(this.battery);
        return this;
    };
    return remote;
}());
var myprojectremote = new remote();
console.log(myprojectremote);
myprojectremote.remoteButton().remotebattery().remotecolor();
