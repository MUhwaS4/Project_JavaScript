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

// filter() 함수: 조건을 만족하는 요소들만 모아 새 배열을 반환
// 인자: 조건을 정의하는 함수

// 점수가 80점 이상인 사람들만 반환
let pass = persons.filter(
  function (person) {
    return person.point >= 80;
  }
);

// 계산 과정
// 1. person = { name: '유재석', point: 78, city: '서울' }
// 조건 평가: 78 > 80 -> false (미포함)
// 2. person = { name: '김종국', point: 92, city: '서울' }
// 조건 평가: 92 > 80 -> true (포함)
// 3. person = { name: '양세찬', point: 76, city: '제주' }
// 조건 평가: 76 > 80 -> false (미포함)
// 4. person = { name: '하하', point: 81, city: '서울' }
// 조건 평가: 81 > 80 -> true (포함)