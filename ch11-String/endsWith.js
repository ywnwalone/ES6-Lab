//대상 문자열이 첫 번째 파라미터의 문자열로 끝나면 true를 반환하고 아니면 false를 반환합니다.

let target = "123가나다";
console.log(target.endsWith("가나다"));
console.log(target.endsWith("가나"));
console.log(target.endsWith("가나",5));
