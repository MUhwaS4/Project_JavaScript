// Q6. 상품들의 가격을 계산하는 프로그램 생성.
// 여러 상품을 인자로 입력받아, 평균 가격을 반환하는 함수 정의.
// 각 상품의 할인율을 적용하여 최종 가격을 계산해야 함.
// 예) 새우깡의 최종 가격: 1500 * 0.9 = 1350원

const product1 = { name: "새우깡", price: 1500, discount: 10 };
const product2 = { name: "홈런볼", price: 2000, discount: 5 };
const product3 = { name: "포카칩", price: 2500 };
const product4 = { name: "칙촉", price: 3000, discount: 15 };
const product5 = { name: "오잉", price: 1800 };

function productAve(...product) {

  let sum = product.reduce(function(total, productList) {
    // 상품들의 최종 가격 합계 계산
    let finalPrice = 0;
    if (typeof productList.discount == "undefined") {
      finalPrice = productList.price;
    } else {
      finalPrice = productList.price * (1 - productList.discount / 100);
    }
    return total + finalPrice;
  }, 0)

  let count = product.length;

  // 평균 가격 계산
  return (sum/count).toFixed(2);
}

function showProduct(...product) {
  console.log("상품 목록: ");
  product.forEach(
    function(product) {
      console.log(product);
      console.log();
    }) 
}

showProduct(product1, product2, product3, product4, product5);

const avgFinalPrice1 = productAve(product1, product2, product3);
const avgFinalPrice2 = productAve(product1, product2, product3, product4, product5);

console.log(`새우깡, 홈런볼, 포카칩의 평균 가격은 ${avgFinalPrice1}원 입니다.`);
console.log(`전체 평균 가격은 ${avgFinalPrice2}원 입니다.`);