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


console.log(`Current light: ${TrafficLight[new Robot(TrafficLight.Red).getCurrentLight()]}`);
new Robot(TrafficLight.Red).changeLightAfterDelay(TrafficLight.Green, 5000); 

console.log(`Light changing to Green in 5 seconds...`);


setTimeout(() => {
    console.log(`Current light after delay: ${TrafficLight[new Robot(TrafficLight.Red).getCurrentLight()]}`);
}, 6000); 



