// 문자열 안에서 변수 삽입하기

var nm = "John"
console.log(`Hello, ${nm}!`); // "Hello, name"
console.log("Hello, " + nm + "!"); // "Hello, name"

// 변수 여러 개를 문자열에 삽입하기
var firstName = "Jane";
var lastName = "Doe";
console.log(`My name is ${firstName} ${lastName}.`)
// My name is Jane Doe.

// 문자열 안에서 계산식 사용하기
var a = 5;
var b = 10;
console.log(`${a} + ${b} = ${a + b}`); // 5 + 10 = 15