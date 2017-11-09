console.log(Number.isSafeInteger(7));
console.log(Number.isSafeInteger(7.00));

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));

console.log(Number.isSafeInteger(7.123));
console.log(Number.isSafeInteger("123"));

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER -1));
