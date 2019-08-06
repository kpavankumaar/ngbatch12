class Engine {
    constructor(engineType, manufacturingProcess) {
        this.engineType = engineType;
        this.manufacturingProcess = manufacturingProcess;
    }
}
class Bike extends Engine {
    constructor(et, mp) {
        super(et, mp);
    }
}
let twoWheeler = new Bike('twin cylinder', 'machinemade');
