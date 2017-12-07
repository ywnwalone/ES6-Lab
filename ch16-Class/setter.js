class Member{
    set setName(name){
        this.name = name;
    }
    get getName(){
        return this.name;
    }
};
let obj = new Member();
obj.setName = 'john';
console.log(obj.getName);   //  john