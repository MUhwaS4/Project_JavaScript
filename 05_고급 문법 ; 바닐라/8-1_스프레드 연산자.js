// 배열 분해하기
// ...배열 ㅣ 배열 앞에 ... 점 세 개를 쓰면 스프레드 연산자가 설정됨
// rest 파라미터와 표기법은 동일하지만, 동작은 반대

let arr = [1, 2, 3];

console.log(arr);
console.log(...arr); // 1 2 3

// 문자열 분해하기

let str = "안녕하세요";
console.log(str);
console.log(...str); // 안 녕 하 세 요


// 두 배열을 하나로 합치기
var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
var arr3 = [...arr2, ...arr1];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6]


// 문자열을 배열에 합치기
var cd = "CD";
var abcd = ["A", "B", ...cd];
console.log(abcd); // ['A', 'B', 'C', 'D']


// 두 객체를 하나로 합치기
let obj1 = { name: "짱구" };
let obj2 = { age: 5, address: "인천" };
let newObj = { ...obj1, ...obj2 };
console.log(newObj); // { name: '짱구', age: 5, address: '인천' }