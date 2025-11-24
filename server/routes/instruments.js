export class User {

    constructor(type, slot) {
        this.type = type;
        this.slot = slot;
    }

    register(Greetings, callback) {
        console.log(` ${Greetings}You have opted for Instrument "${this.type}" and Slot at "${this.slot}"`)
        callback();
    }
}