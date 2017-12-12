let sym = Symbol('123');
const obj = Object(sym);

console.log(obj);           //Symbol {[[PrimitiveValue]]: Symbol(123)}
console.log(obj == sym);    //true
console.log(obj === sym);   //false
