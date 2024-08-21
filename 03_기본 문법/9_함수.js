/* 함수 선언식 */

// 함수 선언식으로 작성한 함수는 호이스팅 현상이 있음
hello();

// 매개변수와 반환값이 없는 함수 선언
function hello() {
  console.log("안녕하세요~!")
}

//  함수 호출: 함수명();
hello();
hello();
hello();

// 매개변수와 반환값이 있는 함수 선언
function sum(x, y) {
  return x + y;
}

// 둘 다 함수 선언만 되고 값을 출력하지 못함
sum(5, 10);
const result = sum(5, 10);

console.log(sum(5, 10));
console.log(result);


/* 함수 표현식 */

//  함수 표현식은 순차적으로 코드를 읽기 때문에, 호출 코드가 위에 있으면 에러남
hi();

// 변수 선언 = 함수 (익명 함수)
const hi = function () {
  console.log("안녕~");
}

//  함수 호출: 변수명();
hi();
console.log(hi);