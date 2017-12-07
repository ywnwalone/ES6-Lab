function Sports(member){
    this.member = member;
};

Sports.prototype.setItem = function(item){
    this.item = item;
};
function Soccer(member){
    Sports.call(this, member);
};
Soccer.prototype = Object.create(Sports.prototype, {
    setGround: {
        value: function(ground){
            this.ground = ground;
        }
    }
});
Soccer.prototype.constructor = Soccer;

var obj = new Soccer(11);
obj.setItem('Soccer');
obj.setGround('Seoul');

console.log(obj.member);    //  11   
console.log(obj.item);      //  Soccer
console.log(obj.ground);    //  Seoul