// Q13. 현재 시간을 다음과 같이 출력.

let now = new Date();

const days = [];
const times = [];
days.push(now.getFullYear(), now.getMonth()+1, now.getDate());
times.push(now.getHours(), now.getMinutes(), now.getSeconds());

console.log(days.join('-') + " " + times.join(':'));
// 배열에 넣지 않고 그냥 불러와서 바로 변수에 저장하는 것도 방법 (이 경우 구분자도 모두 포함해서 작성)

// Q14. 2024년 1월 1일부터 10일 후의 날짜 출력.

let daySet = new Date(2024, 0, 1, 9, 0, 0);
daySet.setDate(daySet.getDate()+10);
console.log("10일 후 날짜: " + daySet.toLocaleString());

// Q15. 현재 시간에서 1시간 30분 후의 시간을 출력

let now2 = new Date();
// now2.setHours(now2.getHours()+1.5); // 시간은 소수점 안 되는 듯...
now2.setMinutes(now2.getMinutes()+90); // 분은 60분 넘으면 자동으로 시간 넘겨줌
console.log("1시간 30분 후의 시간: " + now2.toLocaleString());

// Q16. 방문 기록을 관리하는 프로그램 생성

// 1) 방문 기록 배열 생성
// 2) 방문 날짜를 기준으로 배열을 오름차순 정렬
// 3) 방문 목적이 "회의"인 기록만 필터링
// 4) 필터링된 기록의 날짜를 연도, 월, 일로 변환하여 객체 반환

const visits = [
  { name: "김철수", date: "2024-08-20", purpose: "회의" },
  { name: "이영희", date: "2024-08-18", purpose: "상담" },
  { name: "박지훈", date: "2024-08-21", purpose: "회의" },
  { name: "최유리", date: "2024-08-19", purpose: "교육" },
  { name: "정민호", date: "2024-08-17", purpose: "상담" }
];

visits.sort(
  function (a, b) {
    return new Date(a.date) - new Date(b.date)
  }
);

let q2 = "정렬된 방문 기록: ";
console.log(q2);
console.log(visits);

let filVisits = visits.filter(
  function (person) {
    return person.purpose == '회의'
  }  
);

let q3 = "회의 목적의 방문 기록: ";
console.log(q3);
console.log(filVisits);

let newVisits = filVisits.map(
  function (person) {
    return {
      name: person.name,
      year: new Date(person.date).getFullYear(),
      month: new Date(person.date).getMonth()+1,
      day: new Date(person.date).getDate(),
      purpose: person.purpose
    }
  }
);

// Date 객체를 하나만 생성하는 것도 가능
const formatted = filVisits.map (
  function (person) {
    const dateObj = new Date (person.date); // Date로 객체 변환

    return {
      name: person.name,
      year: dateObj.getFullYear(),
      month: dateObj.getMonth()+1,
      day: dateObj.getDate(),
      purpose: person.purpose
    }
  }
)

console.log(newVisits);
console.log(formatted);