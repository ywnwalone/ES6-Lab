/*
** unicod 플래그
**
** unicode 플래그는 플래그에 u를 작성합니다. 매치 대상을 문자열로 인식하지 않고 유니코드의 코드 포인트 값으로 인식합니다.
*/

let result = /\u{31}\u{32}/u.test("12");
console.log(result);

result = /\u{31}\u{32}/.test("12");
console.log(result);
