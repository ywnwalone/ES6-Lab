

const sym = Symbol();
console.log("1:", sym);
console.log("2:", typeof sym);
console.log("2:", Symbol("주석"));
console.log("4:", sym == Symbol());