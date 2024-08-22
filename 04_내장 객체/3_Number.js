// Number 객체: 숫자를 생성, 조작, 계산하는 함수를 제공

// 숫자를 문자로 변환하는 함수
let num1 = 123;
let str = num1.toString(); // "123"
console.log("num1의 타입: " + typeof num1); // "number"
console.log("str의 타입: " + typeof str); // "string"

// 소수점 몇 번째 자리까지 보여줄 지 결정하는 함수
// 해당 위치에서 반올림한 값을 반환
// 인자: 자리수 (소수점 밑자리만 선택)
let num2 = 10.656;
console.log("소수점 0번째 자리까지 반환: " + num2.toFixed(0)); // 11
console.log("소수점 2번째 자리까지 반환: " +num2.toFixed(2)); // 10.66

// 정수와 소수를 포함해서 몇 번째 자리까지 보여줄 지 결정
// 인자: 자리수 (정수를 포함해서 제일 처음부터 선택)
console.log("전체 반환: " + num2.toPrecision()); // 10.656 (그대로)
console.log("1번째 자리까지 반환: " + num2.toPrecision(1)); // 1e+1 (지수 표기법)
console.log("2번째 자리까지 반환: " + num2.toPrecision(2)); // 11
console.log("4번째 자리까지 반환: " + num2.toPrecision(4)); // 10.66

// 문자열을 숫자(정수)로 변환하는 함수
console.log("'-10'을 숫자로 변환: " + parseInt("-10"), "| 타입: " + typeof parseInt("-10"));
console.log("'12.33'을 숫자로 변환: " + parseInt("12.33")); // 12 (int는 실수가 아닌 정수형)
console.log("'10 years'을 숫자로 변환: " + parseInt("10 years")); // 10 (시작하는 부분에 숫자가 있으면 변환 가능)
console.log("'years 10'을 숫자로 변환: " + parseInt("years 10")); // NaN(Not A Number) (그렇지 않으면 인식 불가)

// 문자열을 숫자(실수)로 변환하는 함수
console.log("'12.33'을 숫자(실수)로 변환: " + parseFloat("12.33")); // 12.33

// isNaN: 문자열이 숫자로 변환 가능한 지 확인하는 함수
// 인자: String | 반환: Boolean
console.log("숫자로 변환할 수 없는 값인가요? " + isNaN("aa")); // true
console.log("숫자로 변환할 수 없는 값인가요? " + isNaN("10")); // false