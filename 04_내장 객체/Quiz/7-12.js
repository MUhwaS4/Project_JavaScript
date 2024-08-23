// Q7. 배열의 요소 중에서 20보다 큰 숫자를 찾고, 각 요소에 2를 곱한 결과 작성.

const number = [10, 15, 20, 25, 30];

let multiplication = number.filter(
  function (num) {
    return num > 20
    // 조건부 필터만 가능하기 때문에 *(곱셈) 적용 안 됨
  }
).map(
  function (mul) {
    return mul * 2
    // 필터를 거친 요소를 두고 새로운 배열을 생성해서 * 2 처리
  }
);

console.log("배열: " + number);
console.log("결과: " + multiplication);


// Q8. 주어진 문자열에서 각 단어의 첫 글자를 대문자로 변환하세요. ?? ...

const sentence = "hello world welcome to programming";

let senCut = sentence.split(" ");
// 제시된 문자열을 단어 단위로 자름
const newSen = [];
// 대문자로 변환한 문자를 넣을 배열 선언

for (let i=0; i<senCut.length;i++) {
  let txt = senCut[i].charAt(0).toUpperCase() + senCut[i].slice(1);
  // 각 배열에서 첫 글자만 추출(charAt(0)하고 대문자 변환, slice를 이용해서 첫 번째 글자(0)만 삭제한 문자열과 결합)
  newSen.push(txt);
  // 결합한 문자열을 새로운 배열에 추가
}

console.log("배열: " + sentence);
console.log("결과1: " + newSen.join(' '));
// 문자열을 나열할 때 사이사이에 띄어쓰기 추가


            // 버전2
            let newText = "";
            for (let word of senCut) {
              // 각 단어를 순회하면서 단어의 첫 글자만 대문자로 변경
              // 한 글자씩 새로운 텍스트에 연결
              for (let i in word) {
                if (i==0) {
                  // 첫 글자를 대문자로 변경하여 연결
                  newText = newText + word[i].toUpperCase();
                } else {
                  // 첫 글자가 아닌 경우, 원래문자 그대로 연결
                  newText = newText + word[i];
                }
              }
              // 단어와 단어 사이 띄어쓰기 추가
              newText = newText + " ";
            }

            console.log("결과2: " + newText)


// Q9. 배열에서 문자열의 길이가 5보다 긴 요소만 찾아 대문자로 변환.

const sentence2 = ["apple", "banana", "grape", "kiwi", "watermelon"]

let fiveHighText = sentence2.filter(
  function (text) {
    return text.length > 5
    // 글자 크기가 5를 넘는 것들만 추출
  }
).map(
  function (text) {
    return text.toUpperCase()
    // 이후 대문자로 변환해서 새롭게 배열에 정리
  }
);

console.log("배열: " + sentence2);
console.log("결과: " + fiveHighText);


// Q10. 상품을 관리하는 프로그램 생성.

// 1) 상품 목록 배열 생성
// 2) 상품 가격 기준 오름차순 정렬
// 3) 가격이 50000원 이상 500000원 이하, 카테고리가 "전자제품"인 상품 찾기
// 4) 상품의 가격을 한국 원화 형식 (예:₩1000)으로 변환

const products = [
  { name: "스마트폰", price: 799000, category: "전자제품"},
  { name: "노트북", price: 1200000, category: "전자제품"},
  { name: "헤드폰", price: 150000, category: "전자제품"},
  { name: "키보드", price: 100000, category: "액세서리"},
  { name: "마우스", price: 50000, category: "액세서리"},
  { name: "충전기", price: 30000, category: "액세서리"},
  { name: "블루투스 스피커", price: 90000, category: "전자제품"}
];

products.sort (
  function (a, b) {
    return a.price - b.price
    // 순정렬
  }
);

let txt_q2 = "정렬된 상품 목록: ";

console.log(txt_q2);
console.log(products);

let proDevice = products.filter(
  function (pri) {
    return pri.price > 50000 && pri.price < 500000 && pri.category == "전자제품"
  }
);

let txt_q3 = "필터링된 상품 목록: ";

console.log(txt_q3);
console.log(proDevice);

let newProDevice = proDevice.map(
  function(item) {
    return {
      name: item.name,
      formattedPrice: "₩" + item.price,
      // 다른 것들은 모두 기존 그대로, 금액만 앞에 문자 추가
      category: item.category
    }
  }
);

let txt_q4 = "포맷된 상품 목록: ";

console.log(txt_q4);
console.log(newProDevice);


// Q11. 학생의 성적 관리 프로그램 생성.

// 1) 학생 목록 배열 생성
// 2) 성적에 따라 학생에게 "A", "B", "C" 등급 추가
// 3) 학생 성적을 기준으로 내림차순 정렬
// 4) 1학년 학생 중 등급이 "B"인 착생들을 찾아 점수 총합 계산

const student = [
  { name: "김철수", score: 85, gradeLevel: "1학년" },
  { name: "이영희", score: 92, gradeLevel: "2학년" },
  { name: "박지훈", score: 76, gradeLevel: "3학년" },
  { name: "최유리", score: 88, gradeLevel: "1학년" },
  { name: "정민호", score: 54, gradeLevel: "1학년" },
  { name: "한서연", score: 63, gradeLevel: "2학년" },
  { name: "장동건", score: 71, gradeLevel: "3학년" },
  { name: "오지호", score: 80, gradeLevel: "3학년" }
];

for (let x of student) {
  if (x.score >= 90) {
    x.grade = "A"
  } else if (90 > x.score && x.score >= 70) {
    x.grade = "B"
  } else {
    x.grade = "C"
  }
  // 점수에 맞춰서 각각 .grade 등급 추가
}

txt_q2 = "등급이 추가된 학생 목록";

console.log(txt_q2);
console.log(student);

let studentList = student.sort(
  function (a, b) {
    return b.score - a.score
    // 역정렬
  }
);

txt_q3 = "정렬된 학생 목록: ";

console.log(txt_q3);
console.log(studentList);

let studentFilter = studentList.filter(
  function (grade) {
    return grade.grade == "B" && grade.gradeLevel == '1학년'
  }
);

txt_q4 = "필터링된 학생 목록: ";

console.log(txt_q4);
console.log(studentFilter);

let totalScore = studentFilter.reduce(
  function (sum, cur) {
    return sum + cur.score
  }
  // reduce (function (총합, 계산할 요소) {return값}, 초기화값)
, 0);

console.log("1학년 중 등급이 'B'인 학생들의 점수 총합: " + totalScore);


// Q12. 상품의 재고를 관리하는 프로그램 생성.

// 1) 상품 목록 배열 생성
// 2) 새로운 제품인 "바나나킥" 목록 추가 (수량 50, 가격 1000)
// 3) 재고가 있는 제품 이름 변경
// 4) 재고가 10개가 넘는 제품은 가격의 10%를 할인
// 5) 모든 제품의 총 재고 가치를 계산

const inventory = [
  { product: "감자칩", quantity: 10, price: 1500 },
  { product: "아이스크림", quantity: 0, price: 3000 },
  { product: "쿠키", quantity: 20, price: 2000 },
  { product: "탄산음료", quantity: 5, price: 1000 }
];

inventory.push(
  { product: "바나나킥", quantity: 50, price: 1000 }
);

txt_q2 = "새로운 제품 추가: ";

console.log(txt_q2);
console.log(inventory);

inventory.filter(
  function (product) {
    return product.quantity > 0
    // 필터로 수량이 있는 것들을 확인
  }  
).forEach(
  function (x) {
    x.product = "(재고있음) " + x.product
    // 재고가 있다면 앞의 문구를 변경 
  } 
);

txt_q3 = "재고가 있는 제품의 이름 변경: ";

console.log(txt_q3);
console.log(inventory);

inventory.filter (
  function (list) {
    return list.quantity > 10
  }
).forEach (
  function (x) {
    x.price = x.price - (x.price*0.1);
  }
);

txt_q4 = "재고가 10개가 넘는 제품의 가격 할인: ";

console.log(txt_q4);
console.log(inventory);

let totalPrice = inventory.reduce(
  function (total, accumulator) {
    return (accumulator.price * accumulator.quantity) + total
  }
, 0);

console.log("전체 재고의 총 가치: " + totalPrice)