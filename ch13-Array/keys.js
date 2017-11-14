/*
** keys(): Key 이터레이터 오브젝트 생성
**
** key만 갖는 이터레이터 오브젝트를 생성하여 반환합니다.
*/

let iterator = [10, 20, 30].keys();
for(var key of iterator){
  console.log(key, ":", iterator[key]);
}
