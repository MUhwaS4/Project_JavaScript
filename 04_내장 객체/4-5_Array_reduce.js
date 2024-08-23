// reduce: 배열의 요소를 순회하며 누적값을 계산

var points = [40, 100, 1, 5, 25, 10];

// 첫 번째 인자: 계산식을 정의한 함수
// 두 번째 인자: 초기값 (여기서는 0)
// var sum = points.reduce(함수, 초기값);

var sum = points.reduce(
  // 누적값, currentValue: 현재 요소
  function (total, currentValue) {
    console.log("계산 중… " + currentValue)
    return total + currentValue;
  }
, 0);

// 보통 합을 구할 땐 for문 + sum = sum + i (sum += i) / let sum = 0(초기값 변수 추가 선언) 를 사용했지만
// return sum + i과 초기값 설정으로 깔끔하게 배열을 순회시킴

// 배열 요소의 합계를 계산하여 반환
console.log("합계: " + sum);