/* 1. 빈 객체 만들기 */

// 빈 객체 생성 = 생성자 호출
let person = new Object();

// 객체에 프로퍼티 추가
person.fisrtName = "고";
person.lastName = "길동";
person.age = 30;

person.getName = function() {
  console.log(this.fisrtName + this.lastName);
}

person.getName();

/* 2. 객체 만들기 */
let person2 = {
  fisrtName: "고",
  lastName: "길동",
  age: 30,
  getName: function() {
    console.log(this.fisrtName + this.lastName);
  }
};

person2.getName();

// 첫 번째 방식은 객체를 동적으로 생성하기 좋음

// xml과 JSON = 데이터를 표현하는 방법
// 자바스크립트는 JSON 방식을 채택