class Sports{
    constructor(){
        console.log(Sports.getGround());
        console.log(this.constructor.getGround());

    }
    static getGround(){
        return 'seoul';
    }
};
let obj = new Sports();