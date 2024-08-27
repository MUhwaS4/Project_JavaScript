// Q13. 이름과 나이를 변수에 저장하고 변수를 사용하여 다음과 같이 출력.
// 예: 이름=아리, 나이=17 로 설정한 후, "아리의 나이는 17 입니다."

let name = "아리";
let age = 17;
console.log(`${name}의 나이는 ${age}입니다.`)


// Q14. 숫자 두개를 변수에 저장하고, 두 숫자를 곱한 결과를 포함하여 다음과 같이 출력.
// 예: a=10, b=20으로 설정한 후, "10과 20을 곱한 결과는 200 입니다"

let a1 = 10;
let b1 = 20;
console.log(`${a1}와 ${b1}를 곱한 결과는 ${a1*b1}입니다.`)


// Q15. 숫자 두개를 변수에 저장하고, 두 수의 평균을 포함하여 다음과 같이 출력.
// 예: a=10, b=20으로 설정한 후, "10과 20의 평균은 15 입니다"

let a2 = 10;
let b2 = 20;
console.log(`${a2}와 ${b2}의 평균은 ${(a2+b2)/2}입니다.`)


// Q16. 도시 이름과 인구수를 변수에 저장하고, 변수를 사용하여 다음과 같이 출력.
// 예: 도시이름=서울, 인구수=9736000로 설정한 후, "서울의 인구는 9736000 명 입니다."

let cityName = "서울";
let cityPerson = 9736000;
console.log(`${cityName}의 인구는 ${cityPerson}명입니다.`)


// Q17. 학생의 이름과 점수를 변수에 저장하고, 변수를 사용하여 다음과 같이 출력.
// 점수가 60점 이상이면 합격이고, 그렇지 않으면 불합격.

let studentName = "소영";
let studentScore = 75;

if (studentScore > 60) {
  console.log(`${studentName}의 점수는 ${studentScore}점으로 합격입니다.`)
} else {
  console.log(`${studentName}의 점수는 ${studentScore}점으로 불합격입니다.`)
};


// Q18. 아래와 같이 변수 세 개를 선언하세요.
// 그리고 이 세 개의 변수를 키로 사용하여 자동차 객체 car를 생성하세요.


key1 = "make"; key2 = "model"; key3 = "year";

let car = {
  [key1]: "현대",
  [key2]: "쏘나타",
  [key3]: 2021
}

console.log("객체:", car);


// Q19. 아래와 같이 사람 객체 person을 생성하고, 변수 property를 선언하세요.
// 그리고 person 객체에 property 변수를 사용하여 동적으로 속성을 추가.

let property = "address";

let person = {
  name: "철수",
  age: 21,
};

console.log("초기 객체:", person)

person[property] = "인천 남동구 만수동";

console.log("업데이트 된 객체:", person)


// Q20. 아래와 같이 변수 두 개를 선언.
// 빈 객체 product를 생성, 변수를 사용하여 동적으로 속성을 추가.

key1 = "productName";
key2 = "productPrice";

let product = {};

console.log("초기 객체:", product)

product[key1] = "필통";
product[key2] = 5000;

console.log("업데이트 된 객체:", product)