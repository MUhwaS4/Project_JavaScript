// sort 함수: 배열을 기본 방식으로 오름차순 정렬

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// reversre: 배열을 역순으로 정렬
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Mango', 'Banana', 'Apple' ]

// 인자: 두 수를 비교하는 함수
// sort 함수의 비교 함수는 양수, 0, 음수를 반환하며,
// 값에 따라 배열 요소의 순서를 결정. 양수가 나오면 위치를 바꿈.
var points = [40, 100, 1, 5];
points.sort(
  function (a, b) {
    // return a - b; // 앞 숫자가 더 크면 양수 = 오름차순(순) 정렬
    return b - a; // 뒷 숫자가 더 크면 양수 = 내림차순(역) 정렬
  }
)

console.log(points);

// 계산 과정 (정렬이 끝날 때까지 여러 번 순회)
// 1. 40과 100 비교 -> 40 - 100 = -60 (순서 유지)
// 2. 100과 1 비교 -> 100 -1 = 99 (순서 변경: 1이 앞으로)
// 3. 100과 5 비교 -> 100 - 5 = 95 (순서 변경: 5가 앞으로)
// 4. 40과 1 비교 -> 40 - 1 = 39 (순서 변경: 1이 앞으로)
// 5. 40과 5 비교 -> 40 - 5 = 35 (순서 변경: 5가 앞으로)

// 객체형 배열
var persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울"
  },
  {
    name: "김종국",
    point: 92,
    city: "서울"
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주"
  },
  {
    name: "하하",
    point: 81,
    city: "서울"
  }
];

console.log("객체형 배열 확인: " + persons);

// Q. 사람의 점수를 비교해서 내림차순으로 정렬

persons.sort (
  function (a, b) {
    return b.point-a.point;
  }
);

console.log("순서 정렬 확인: " + persons);