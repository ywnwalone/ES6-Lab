class Sports{
    setGround(ground){
        this.ground = ground;
    }
};
class Soccer extends Sports{
    setGround(ground){
        super.setGround();
        this.ground = ground;
    }
};
let obj = new Soccer(11);
obj.setGround('Seoul');
console.log(obj.ground);        //  Seoul