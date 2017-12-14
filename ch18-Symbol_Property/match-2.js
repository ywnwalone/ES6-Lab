try{
    "ABC".includes(/ABC/);
}catch(e){
    console.log(e);
}
let regexObj = /ABC/;
regexObj[Symbol.match] = false;
console.log("/ABC/".includes(regexObj));