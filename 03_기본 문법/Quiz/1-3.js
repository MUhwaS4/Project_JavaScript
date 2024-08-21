// Q1. 회원, 제품, 주문 정보를 담을 수 있는 객체를 만들어주세요.

const member = [];
member.push({
  id: "user1",
  password: 1234,
  rank: "silver",
  name: "짱구",
  phone: "010-1234-5678"
});

const item = [];
item.push({
  item_name: "초코비",
  price: 4500,
  content: "초콜릿 과자",
  category: "과자"
});

const order = [];
order.push({
  order_item: "초코비",
  num: 2,
  sumPrice: 9000,
  order_name: "짱구",
  order_date: "2024-08-20",
  address: "떡잎마을"
});

// Q2. 사람 객체의 정보를 수정하여, 아래와 같이 출력하세요.
const person = {
  age : 30,
  name : "둘리",
  address : "서울"
};

person.age = 10;
person.name = "또치";
person.address = "인천";

console.log(person.age, person.name, person.address);

const product = {
  name: "노트북",
  price: 1500000,
  brand: "삼성",
};

product.price = 2000000;
product.brand = "LG"

console.log(product.name, product.price, product.brand);

// Q3. 다음 문자열 배열을 사용하여 첫 번째 요소와 마지막 요소를 합쳐서 출력하세요.

const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];

// 그냥 일괄 출력하는 법
// 문자 연결 × 각각 출력하는데 한 번에 출력 ○
console.log(foodList[0], foodList[foodList.length-1]);

// 함수로 정리해서 출력하는 법
const food1 = foodList[0];
const food2 = foodList[foodList.length-1];
const result = food1 + ' ' + food2;
console.log(result);