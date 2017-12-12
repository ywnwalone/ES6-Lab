let sym = Symbol('123');
let obj = {[sym]: '4566'};

console.log(obj);
console.log(obj[sym]);
console.log(obj.sym);
console.log(obj['123']);