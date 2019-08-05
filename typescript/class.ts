class MotherBoard{
    constructor(processor:string, ram:string, ports:string[],public powersupply){
       this.processor = processor;
       this.ramslot = ram;
       this.ports = ports;
    }
    processor = "i7";
    ramslot= "8gb";
    ports= ['hdmi','vga'];
}
class Accessorries extends MotherBoard{

}
class PersonalComputer extends Accessorries {
    constructor(processor:string, ram:string, ports:string[], powersupply){
        super(processor, ram, ports, powersupply)
    }

}
let cpu1 = new MotherBoard("i7","16gb",['usb','audio'],"smps");
let pc1 = new PersonalComputer("i7","16gb",['usb','audio'],"smps");