class Member{
    constructor(){
        return {name: 'John smith'};
    }
    getName(){
        return 'Name';
    }
}
let obj = new Member();
console.log(obj.name);      //  John smith
console.log(obj.getName()); //  undefined