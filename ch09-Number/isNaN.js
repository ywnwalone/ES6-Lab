console.log("1: ",Number.isNaN(NaN), isNaN(NaN));

console.log("2: ",Number.isNaN("NaN"), isNaN("NaN"));
console.log("3: ",Number.isNaN("ABC"), isNaN("ABC"));

console.log("4: ",Number.isNaN(undefined), isNaN(undefined));
console.log("5: ",Number.isNaN({}), isNaN({}));
console.log("6: ",Number.isNaN(Number.NaN), isNaN(Number.NaN));

console.log("7: ",Number.isNaN(0/0), isNaN(0/0));
console.log("8: ",Number.isNaN(true), isNaN(true));
console.log("9: ",Number.isNaN(null), isNaN(null));

console.log("A: ",Number.isNaN(""), isNaN(""));
