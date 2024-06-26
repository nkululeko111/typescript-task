/**
 * name
 */
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
var Robot = /** @class */ (function () {
    function Robot(RobotLight) {
        this.RobotLight = RobotLight;
    }
    Robot.prototype.changeTrafficLight = function (newLight) {
        this.RobotLight = newLight;
        console.log("Light changed to: ".concat(TrafficLight[this.RobotLight]));
    };
    Robot.prototype.getCurrentLight = function () {
        return this.RobotLight;
    };
    Robot.prototype.changeLightAfterDelay = function (newLight, delay) {
        var _this = this;
        setTimeout(function () {
            _this.changeTrafficLight(newLight);
        }, delay);
    };
    return Robot;
}());

var myRobot = new Robot(TrafficLight.Red);
console.log("Current light: ".concat(TrafficLight[myRobot.getCurrentLight()])); 
myRobot.changeLightAfterDelay(TrafficLight.Green, 5000); 

console.log("Light will change to Green in 5 seconds...");

setTimeout(function () {
    console.log("Current light after delay: ".concat(TrafficLight[myRobot.getCurrentLight()]));
}, 6000);
