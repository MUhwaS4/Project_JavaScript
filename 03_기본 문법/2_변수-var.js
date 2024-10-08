/* var를 사용하지 않는 이유 */

// console.log(puppy); // 선언되지 않은 변수는 사용 불가
let puppy = "cute"; // 전역 변수
{
  let puppy = "so cute"; // 지역 변수
}
console.log(puppy);

// var는 변수를 선언하기 전에 사용할 수 있는 호이스팅 현상이 발생함
console.log(cat); // 선언되지 않았음에도 사용 가능
var cat = "cute";
{
  // var는 스코프로 전역변수와 지역변수를 구분할 수 없음
  var cat = "so cute";
}
console.log(cat);

// 결론: var 키워드는 호이스팅, 유효범위 등 문제가 있어서 권장 ×