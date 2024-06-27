enum TrafficLight {
    Red,
    Yellow,
    Green
}

class Robot {
    private RobotLight: TrafficLight;

    constructor(RobotLight: TrafficLight) {
        this.RobotLight = RobotLight;
    }

    public changeTrafficLight(newLight: TrafficLight) {
        this.RobotLight = newLight;
        console.log(`Light changed to: ${TrafficLight[this.RobotLight]}`);
    }

    public getCurrentLight(): TrafficLight {
        return this.RobotLight;
    }

    public async changeLightAfterDelay(newLight: TrafficLight, delay: number) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        this.changeTrafficLight(newLight);
    }
}


const robot = new Robot(TrafficLight.Red);

(async () => {
    for (let i = 0; i < 6; i++) {
        await robot.changeLightAfterDelay(TrafficLight.Yellow, 10000); 
        await robot.changeLightAfterDelay(TrafficLight.Green, 10000); 
        await robot.changeLightAfterDelay(TrafficLight.Red, 10000);
    }
})();
