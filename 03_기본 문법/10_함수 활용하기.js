// 부가세 계산하기

let salePrice1 = 100000; // 매출
let vat1 = 0.1; // 부가세 10%
let tex1 = salePrice1 * vat1;
console.log("부가세: " + tex1);

let salePrice2 = 240000; // 매출
let vat2 = 0.1; // 부가세 10%
let tex2 = salePrice2 * vat2;
console.log("부가세: " + tex2);

let salePrice3 = 940000; // 매출
let vat3 = 0.1; // 부가세 10%
let tex3 = salePrice3 * vat3;
console.log("부가세: " + tex3);

// 위 코드의 문제점:
// 함수없이 부가세를 계산하면 동일한 계산 코드가 반복됨

// 부가세를 계산하는 함수 만들기
// 입력값 / 매개변수: 매출
// 출력값 / 반환: 부가세

function calculateTax(salePrice) {
  let vat = 0.1; // 부가세 10%
  let tex = salePrice * vat;
  console.log("부가세: " + tex);
}

// 함수를 이용해서 10만원, 24만원, 94만원에 대한 부가세 계산

calculateTax(100000);
calculateTax(240000);
calculateTax(940000);

// 부가세를 한 번에 출력하고 싶다면 return 값으로 줘야 함

function calculateTax2(salePrice) {
  let vat = 0.1; // 부가세 10%
  let tex = salePrice * vat;
  return tex;
}

console.log(calculateTax2(100000), calculateTax2(240000), calculateTax2(940000))