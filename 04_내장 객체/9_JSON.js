/* JSON 문자열과 객체 사이의 변환 과정 */

// 자바스크립트의 객체

var date = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" }
  ]
};

console.log(date);
console.log(typeof date); // object
console.log(date.employees[0]);

// 자바스크립트 객체를 JSON 형식의 문자열로 변환 (object -> string)
var stringValue = JSON.stringify(date);
console.log(stringValue);
console.log(typeof stringValue); // string

// JOSN 형식의 문자열
// JSON: 데이터를 전송할 때 사용하는 데이터 형식 (예: JOSN, XML…)

var text = 
  '{ "employees" : [ ' +
  '{ "firstName": "John", "lastName": "Doe" }' + 
  '{ "firstName": "Anna", "lastName": "Smith" }' +
  '{ "firstName": "Peter", "lastName": "Jones" } ]}';

  console.log(text);
  console.log(typeof text); // string

  // JSON 문자열을 자바스크립트 객체로 변환
  var obj = JSON.parse(text); // string -> object
  console.log(obj);
  console.log(typeof obj); // object

  console.log(obj.employees[0].lastName);

  // JOSN을 변환해야 하는 이유 
  // 외부와 연결할 때 (예: API 요청), 데이터를 주고받기 위해 JSON형식의 문자열을 사용함.
  // 하지만 문자열은 자바스크렙트애서 바로 활요앟기 어려움
  // JSON 문자열은 자바스크립트에서 객체로 변환하여 프로퍼티를 꺼내 쓸 수 있음

  /* JSON 배열과 객체 사이의 변환 과정 */

  // JSON과 자바스크립트 객체의 차이점, 객체의 키의 차이점, 객체의 키는 " "를 꼭 안 써도 됩니다.