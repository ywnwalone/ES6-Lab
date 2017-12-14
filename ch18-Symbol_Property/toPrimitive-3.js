
let ob = {
    [Symbol.toPrimitive](hint){
        if(hint === "number"){
            return 30;
        }
        if(hint === "string"){
            return "String";
        }
        return "default";
    }
}

console.log(20+obj);
console.log(20*obj);
console.log(obj+50);
console.log(obj+50);
console.log(`${obj}`+123);