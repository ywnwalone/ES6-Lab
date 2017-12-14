# Symbol Property

## 1. Well-Known Symbol

> 스펙에서 `@@iterator` 형태로 작성된 것을 볼 수 있는데, `@@`는 `Symbol` 대신 사용한 것이다.
> 따라서 `@@iterator`는 `Symbol.iterator`와 같다.

### Well-Known Symbol table
| Spec Name | [[Description]] |
|-----------|-----------------|
| @@hasInstance | "Symbol.hasInstance" |
| @@isConcatSpreadable | "Symbol.isConcatSpreadable |
| @@iterator | "Symbol.iterator" |
| @@match | "Symbol.match" |
| @@replace | "Symbol.replace" |
| @@search | "Symbol.search" |
| @@species | "Symbol.species" |
| @@split | "Symbol.split" |
| @@toPrimitive | "Symbol.toPrimitive" |
| @@toStringTag | "Symbol.toStringTag" |
| @@unscopables | "Symbol.unscopables" |


## 2. toStringTag

> `[object Object]` 형태에서 Object를 `Symbol.toStringTag` 값으로 표시합니다.

| 구분 | 타입 | 데이터(값) |
|------|-----|-----------|
| 형태 | | Symbol.toStringTag |
| 파라미터 | String | 설명 참조 |
| 반환 | String | 프로퍼티 값 또는 return에서 반환된 값 |

> `Object.prototype.toString()`과 기능이 비슷하다.
> 하지만, Function 오브젝트도 [object Object]를 반환하므로 명확하게 구분할 수 없다.
> `Symbol.toStringTag`를 쓰면 된다.

### 클래스의 메서드로 사용


## 3. isConcatSpreadable

> Array 오브젝트의 `concat()`에서 배열을 결합할 때 결합하는 배열의 펼침 여부를 지정한다.
> ** [구문] Symbol.isConcatSpreadable = true / false, (디폴트 true) **

### Array-like 오브젝트에서 사용


## 4. unscopables

> with 문에서 사용하며 값이 true이면 프로퍼티를 전개하지 않는다.
> ** [구문] Symbol.unscopables = true / false **
> Symbol.unscopables 값이 true일 때, with 문에서 프로퍼티를 전개하지 않으므로 Object 오브젝트의 프로퍼티 키를 사용하면 에러가 발생한다.
> ES5에서 `"use strict"` 범위에 with 문을 사용하면 에러가 발생한다.


## 5. species 개념

> `Symbol.species`는 constructor를 반환한다.
> `Symbol.species`를 오버라이드할 수 있다.

## 6. species

> `Symbol.species`는 constructor를 반환한다.

| 구분 | 타입 | 데이터(값) |
|------|-----|-----------|
| 형태 | | Symbol.species |
| 파라미터 | | 없음 |
| 반환 | Instance | 생성한 인스턴스 |

> `Symbol.species`는 **static** 액세서 프로퍼티로 getter만 있고, setter는 없다.
> Array, Map, Set, Promise, RegeExp, ArrayBuffer, TypedArray 오브젝트에 Symbol.species가 빌트인으로 포함되어 있다.


## 7. 다른 Class 반환


## 8. null 반환

> `[Symbol.species]()`에서 null을 반환하면 디폴트 `[Symbol.species]()`가 호출된다.


## 9. toPrimitive

> 오브젝트를 프리미티브 타입으로 변환한다.

| 구분 | 타입 | 데이터(값) |
|------|-----|-----------|
| 형태 | | Symbol.toPrimitive() |
| 파라미터 | String | 프리미티브 값 변환 힌트 |
| 반환 | Any | (선택) 반환 값 |

## 10. 이터레이터

> `Symbol.iterator()`는 이터레이터 오브젝틀르 생성하여 반환한다.

| 구분 | 타입 | 데이터(값) |
|------|-----|-----------|
| 형태 | | Symbol.iterator() |
| 파라미터 | | 없음 |
| 반환 | iterator | 이터레이터 오브젝트 |


## 11. 제너레이터

> Object 오브젝트에 Symbol.iterator를 제너레이터 함수로 작성하면, 이터레이터로 반복할 때마다 yield를 수행한다.


## 12. match(): match 결과 반환

| 구분 | 타입 | 데이터(값) |
|------|-----|-----------|
| 형태 | Symbol | Symbol.match() |
| 파라미터 | any | Symbol.match()에서 사용하려는 형태 |
| 반환 | any | Symbol.match()에서 반환한 값 |