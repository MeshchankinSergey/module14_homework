class ElectricalAppliances {
    constructor(){
    this.volt = 220,
    this. frequency = 50
    }

    electricPower (inOutlet, ampere){
        let elPower = 0;
        if (inOutlet === true){
            elPower = ampere * this.volt;
        }
        console.log(`This electric appliance power is ${elPower} watt!`)
    }
}

class KitchenAppliances extends ElectricalAppliances {
    constructor(name, volt){
    super(volt);
    this.location = 'kitchen';
    this.name = name;
    }
}

const oven = new KitchenAppliances('oven');

class BathroomAppliances extends ElectricalAppliances {
    constructor(name, volt){
    super(volt);
    this.location = 'bathroom';
    this.name = name;
    }
}

const washingMachine = new BathroomAppliances ('washingMachine');

console.log(oven)
oven.electricPower(false, 6)

console.log(washingMachine)
washingMachine.electricPower(true, 10)