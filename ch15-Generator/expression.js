

let sports = function*(one, two){
  console.log("Function Block");
  yield one + two;
}
let genObj = sports(10, 20);
console.log(genObj.next());
