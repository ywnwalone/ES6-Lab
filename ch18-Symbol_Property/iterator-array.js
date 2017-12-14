let numberArray = [10, 20];

for(let value of numberArray){
    console.log(value);
}

let obj = numberArray[Symbol.iterator]();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());