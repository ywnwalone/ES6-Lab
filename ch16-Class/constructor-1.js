class Member{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
};
let memberObj = new Member('john');
console.log(memberObj.getName());   //  john