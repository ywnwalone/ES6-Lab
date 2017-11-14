/*
** fill(): 범위 값 변경
**
** 같은 배열에서 인덱스 범위의 값을 지정한 값으로 바꾸어 변환합니다.
*/

let one = [1, 2, 3];
console.log( one.fill(7));

let two = [1, 2, 3, 4, 5];
console.log(two.fill(7,1));

let three = [1, 2, 3, 4, 5];
console.log(three.fill(7, 1, 3));
