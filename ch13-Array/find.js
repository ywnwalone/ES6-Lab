/*
** find(): 엘리먼트 값 비교, 반환
**
** 콜백 함수에서 true를 반환하면 처리 중인 엘리먼트 값을 반환합니다.
*/

let result = [1, 2, 3].find((value, index, allData)=> value === 2);
console.log(result);

result = [1, 2, 1].find(function(value, index, allData){
  return value === 1 && value === this.key;
},{key: 1});
console.log(result);
