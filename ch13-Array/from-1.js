/*
** from(): Array 오브젝트 생성
**
** 새로운 Array 오브젝트를 생성하고 콜백 함수에서 반환된 값을 엘리먼트 값으로 설정하여 반환합니다.
*/

let arrayObj = Array.from({0: 'zero', 1: 'one', length: 2});
console.log(Array.isArray(arrayObj));
console.log(arrayObj);

let stringObj = Array.from('ABC');
console.log(stringObj);
