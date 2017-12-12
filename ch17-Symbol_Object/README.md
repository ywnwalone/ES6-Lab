# Symbol Object

## 1. primitive

> Javascript에는 primitive라는 개념이 존재한다.
> 이는 오브젝트가 아닌 값이다.
> ES5에는 `string`, `number`, `boolean`, `null`, `undefined`가 있다.
> ES6에는 `symbol`이 추가되었다.


## 2. Symbol(): Symbol 값 생성

| 구분 | 타입 | 데이터(값) |
|-----|----|----------|
| object | Symbol | Symbol() |
| 파라미터 | String | (선택), 설명, 주석 |
| 반환 | Symbol | 유니트한 Symbol 값 |

> Symbol은 명시적으로 선언해줘야 한다.


## 3. Symbol 값 변경

> Symbol()로 생성한 Symbol 값은 변경할 수 없다.

## 4. Symbol Object 생성

 > Object() 파라미터에 Symbol 값을 지정하면 Symbol 오브젝트를 반환한다.
 > Symbol 오브젝트에 Symbol 메서드, Symbol.prototype, prototpye에 연결된 프로퍼티가 설정된다.


## 5. 오브젝트에서 Symbol 사용

> 유일한 값을 찾는 Symbol 특성을 활용하여 Symbol 값을 오브젝트의 프로퍼티 키로 사용하면 프로퍼티 키가 중복되지 않는다.
> `[Symbol()]` 형태와 같이 대괄호 [] 안에 Symbol()을 작성한다.
> `{[Symbol()]: 123}` 형태에서 프로퍼티 키에 작성한 Symbol()을 **symbol-keyed property**라고 한다.



## 6. Symbol 사용 형태

> `for-in` 문에서 symbol-keyed 프로퍼티가 열거되지 않는다. 
> Symbol은 `Enumerable false` 이다.

