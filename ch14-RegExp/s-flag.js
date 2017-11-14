/*
** sticky 플래그
**
** sticky 플래그는 플래그에 y를 작성합니다.
** 자바스크립트 정규 표현식은 매치된 문자열의 마지막 인덱스에 1을 더해 RegExp 오브젝트의 lastIndex 프로퍼티에 설정합니다.
*/

let regexpObj = /CD/y;
console.log(regexpObj.lastIndex);
console.log(regexpObj.text("ABCDEF"));

regexpObj.lastIndex = 2;
console.log(regexpObj.test("ABCDEF"));
console.log(regexpObj.lastIndex);
console.log(regexpObj.test("0123CD"));
