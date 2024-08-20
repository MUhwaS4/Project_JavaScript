/* while문 */

let i = 1; // 초기화식

while (i <= 10) { // 조건식
  console.log(i);
  i++; // 증감식
}

// 동전교환기에 지폐를 넣고 교환하기!

let inputPrice = 7000; // 사용자가 넣은 지폐 금액
let coinUnit = 500;
let coinCount = 0; // 동전 개수

while (inputPrice > 0) {
  inputPrice = inputPrice - coinUnit;
  coinCount++;
}

console.log("7000원을 500원 동전 " + coinCount + "개로 변경함….");


/* for문 */

// 초기화식, 조건식, 증감식
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 배열의 요소를 하나씩 꺼내기!
let brands = ["애플", "구글",  "페이스북",  "아마존",  "삼성전자"]

for (let i = 0; i < brands.length; i++) {
  console.log(brands[i])
}

// 음료수 자판기에서 음료 찾기
let inputCoin = 800;
let outputList = [];

let productList = [
  { name: "솔의 눈", price: 700},
  { name: "커피", price: 700},
  { name: "파워에이드", price: 1200},
  { name: "오렌지", price: 1000},
  { name: "보리차", price: 1200},
  { name: "밀키스", price: 800},
]

for (let i = 0; i < productList.length; i++) {
  
  if (productList[i].price <= inputCoin) {
    console.log(productList[i]);
    outputList.push(productList[i])
  }
}
console.log(outputList);

/* for-in문 */

let arr = [3, 4, 5];

// 배열을 순회하면서 index를 꺼냄
for (let i in arr) { // 변수 in 배열
  console.log(i);
}

// 배열을 순회하면서 값을 꺼냄
for (let i of arr) { // 변수 in 배열
  console.log(i);
}