let string = '12a';

for(let val of string){
    console.log(val);
}
let obj = string[Symbol.iterator]();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());