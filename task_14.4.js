function ElectricalAppliances(){
    this.volt = 220,
    this. frequency = 50
}

ElectricalAppliances.prototype.electricPower = function(inOutlet, ampere){
    let elPower = 0;
    if (inOutlet === true){
        elPower = ampere * this.volt;
    }
    console.log(`This electric appliance power is ${elPower} watt!`)
} //функция принимает значение вкл(выкл) электроприбор в розетку и необходимая сила тока;

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

console.log(oven)
oven.electricPower(true, 6)

console.log(washingMachine)
washingMachine.electricPower(false, 10)