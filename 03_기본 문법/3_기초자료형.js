/* 기초 자료형 */

// String 문자열
// 문자열은 "" ''로 표기할 것
const myName = "둘리";
const email = 'user@naver.com';

// 문자열 안에 변수를 포함할 때는 백틱과 ${변수}를 사용할 것
const hello = `hello ${myName}`;
console.log(hello);


// Number 숫자
const number = 123; // 정수
const opacity = 0.57; // 실수

// Boolean ~ 여부, 논리형
let checked = true;
let isShow = false;

// undefined 아무것도 정의되지 않은 상태
// 값을 대입하지 않으면 undefined가 자동으로 할당됨
let undef;
console.log(undef);

// null 값이 비어있음을 의미
// undefined와 달리 개발자가 직접 값을 대입해야 함
let name = null;
console.log(name);