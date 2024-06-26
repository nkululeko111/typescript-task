/**
 * name
 */


enum TrafficLight {
    Red, Yellow, Green
}


class Robot {
    private RobotLight: TrafficLight;

    constructor(RobotLight: TrafficLight){
        this.RobotLight=RobotLight;
    }

    public changeTrafficLight(newLight: TrafficLight){
        this.RobotLight = newLight;
    
        console.log(`Light changed to: ${TrafficLight[this.RobotLight]}`);
    }

    public getCurrentLight(): TrafficLight {
        return this.RobotLight;
    }

    public changeLightAfterDelay(newLight: TrafficLight, delay: number) {
        setTimeout(() => {
            this.changeTrafficLight(newLight);
        }, delay);
    }
   
}


const myRobot = new Robot(TrafficLight.Red);
console.log(`Current light: ${TrafficLight[myRobot.getCurrentLight()]}`);
myRobot.changeLightAfterDelay(TrafficLight.Green, 5000); 

console.log(`Light changing to Green in 5 seconds...`);


setTimeout(() => {
    console.log(`Current light after delay: ${TrafficLight[myRobot.getCurrentLight()]}`);
}, 6000); 



