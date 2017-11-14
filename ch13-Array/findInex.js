/*
** findIndex(): 배열 인덱스 반환
**
** 콜백 함수에서 true를 반환하면 처리 중인 배열 인덱스를 반환합니다.
*/

let result = [10, 20, 30].findIndex((value, index, allData) => value === 20);
console.log(result);

result = [10, 20, 30].findIndex((value, index, allData)=> value === 77);
console.log(result);

result = [10, 20, 30].findIndex(function(value, index, allData){
  return value === 30 && value === this.check;
},{check: 30});
console.log(result);
