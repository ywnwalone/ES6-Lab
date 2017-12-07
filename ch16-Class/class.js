

class Member{
    setName(n){
        this.name = n;
    }
    getName(){
        return this.name;
    }
};
Member.prototype.getTitle = function(){};
console.log(typeof Member); //  function