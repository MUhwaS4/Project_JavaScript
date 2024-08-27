console.log("기본 곱셉 함수.");

// 곱셉 함수
function multiply(a, b) {
  console.log(a * b);
}
multiply(5);

console.log();
console.log("오류를 막기 위해 b 검사.");

// 오류를 막기 위해 b 검사하기
function multiply(a, b) {
  // b에 값이 전달되지 않았으면 1로 초기화
  if (typeof b === "undefined") {
    b = 1;
  }
  console.log(a * b);
}

multiply(5); // 정상적으로 5가 출력됨

console.log();
console.log("디폴트 파라미터.");

// 디폴트 파라미터: 함수의 파라미터에 기본값 설정하기
// b 값이 전달되었으면 그대로 사용하고, 전달되지 않았으면 기본값으로 설정
function multiply(a, b = 1) {
  console.log(a * b);
}

multiply(5, 2);
multiply(5);

console.log();
console.log("파라미터(인자) 전달 확인.");

function say(message = "파라미터가 넘어오지 않았어요.") {
  console.log(message);
}

say("안녕하세요.");
say(); // "파라미터가 넘어오지 않았어요."