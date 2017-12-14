

let obj = {};
obj[Symbol.iterator] = function*(){
    yield 10;
    yield 20;
    yield 30;
}
let result = [...obj];
console.log(result);