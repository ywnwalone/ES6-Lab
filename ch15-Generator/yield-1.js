/*
** yield: 제너레이터 함수 실행, 멈춤
**
** 제너레이터 함수를 멈추게 하거나 다시 실행하는 데 사용합니다.
*/


function* sports(one){
  let two = yield one;
  let param = yield two + one;
  yield param + one;
}
let generatorObj = sports(10);

console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next(20));
