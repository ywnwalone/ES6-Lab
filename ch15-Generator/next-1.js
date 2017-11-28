/*
** next(): yield 단위로 실행
**
** 제너레이터 함수에서 yield 단위로 실행합니다.
*/

let gen = function*(value){
  value = value + 10;
  yield ++value;
  value = value + 7;
  yield ++value;
};

let genObj = gen(1);

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
