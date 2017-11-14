/*
** entries(): 이터레이터 오브젝트 생성
**
** Array 오브젝트를 이터레이터 오브젝트로 생성하여 반환합니다.
*/

let values = [10, 20, 30];
let iterator = values.entries();
console.log(iterator.next());

for(var [key, value] of iterator){
  console.log(key, ":", value);
}
