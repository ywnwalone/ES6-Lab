# Symbol Method

## 1. for(): Symbol 값 저장

> 글로벌 Symbol 레지스트리(registry)에 Symbol 값을 저장한다.

| 구분 | 타입 | 데이터(값) |
|------|-----|-----------|
| 형태 | | Symbol.for() |
| 파라미터 | String | (선택), Symbol eky |
| 반환 | Symbol | 검색된 Symbol, 검색되지 않으면 Symbol 값 생성, 저장, 반환 |

> Symbol은 다음과 같이 세 가지 형태로 사용할 수 있다.
> 1. Symbol(): Symbol 값ㅇ을 생성하며 스코프 안에서 사용합니다.
> 2. Symbol.for(): 글로벌 Symbol 레지스트리에 저장되며 전체 프로그램에서 사용합니다.
> 3. Well-Known Symbol: 빌트인 Symbol 프로퍼티로 오버라이드하여 기능을 추가, 변경할 수 있습니다.
