class Member{
    *gen(){
        yield 10;
        yield 20;
    }
};
let obj = new Member();
let genObj = obj.gen();

console.log(genObj.next()); //  Object {value: 10, done: false}
console.log(genObj.next()); //  Object {value: 20, done: false}