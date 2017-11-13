//대상 문자열을 파라미터에 작성한 유니코드 정규화 형식으로 변환하여 반환합니다.

console.log("ㄱ".charCodeAt(0));
console.log("ㅏ".charCodeAt(0));

let jamo = "\u3131\u314F";
console.log(jamo.normalize("NFC"));
console.log(jamo.normalize());
console.log(jamo.normalize("NFD"));
console.log(jamo.normalize("NFKD"));
console.log(jamo.normalize("NFKC"));
