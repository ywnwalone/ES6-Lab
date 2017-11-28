
function* sports(one, two){
  console.log('Function Block');
  yield one + two;
}
console.log(typeof sports);

let genObj = sports(1, 2);
console.log(typeof genObj);
