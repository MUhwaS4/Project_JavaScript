// 변수를 객체의 키로 사용하기

var type = "name";

var person = {
  [type]: "John", // name: "John"
  score: 95,
};

console.log(person);

// 객체의 키를 동적으로 추가하기
var porperty = "grade";

person[porperty] = "A"; // person[grade] = "A"와 같다

console.log(person);