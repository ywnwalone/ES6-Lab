/*
** copyWithin(): 범위 값 복사, 설정
**
** 인덱스 범위의 값을 복사하여 같은 배열의 지정한 위치에 설정합니다.
*/

let one = [1, 2, 3, 4, 5];
console.log(one.copyWithin(0,3));

let two = [1, 2, 3, 4, 5];
console.log(two.copyWithin(0, 2, 4));

let three = [1, 2, 3, 4, 5];
console.log(three.copyWithin(3));
