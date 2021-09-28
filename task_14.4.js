function ElectricalAppliances(){
    this.volt = 220,
    this. frequency = 50
}

ElectricalAppliances.prototype.electricPower = function(ampere){
    let elPower = ampere * this.volt;
    console.log(`This electric appliance power is ${elPower} watt!`)
}

function KitchenAppliances(name){
    this.location = 'kitchen',
    this.name = name
}

KitchenAppliances.prototype = new ElectricalAppliances()

const oven = new KitchenAppliances('oven');

function BathroomAppliances(name){
    this.location = 'bathroom',
    this.name = name
}

BathroomAppliances.prototype = new ElectricalAppliances()

const washingMachine = new BathroomAppliances ('washingMachine');

oven.electricPower(6)
console.log(oven)

washingMachine.electricPower(10)
console.log(washingMachine)