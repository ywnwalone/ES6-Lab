class Sports{
    static setGround(ground){
        this.ground = ground;
    }
    static getGround(){
        return this.ground;
    }
};
Sports.setGround('Seoul');
console.log(Sports.getGround());    //  Seoul