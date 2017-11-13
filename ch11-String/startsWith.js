//대상 문자열이 첫 번째 파라미터의 문자열로 시작하면 true를 반환하고 아니면 false를 반환합니다.

let target = "123가나다라";
console.log(target.startsWith(123));
console.log(target.startsWith("23"));
console.log(target.startsWith("가나",3));
