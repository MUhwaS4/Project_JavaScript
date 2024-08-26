// Q17. 영화 목록을 관리하는 프로그램 작성

// 1) 시청한 영화 목록 Set 객체로 생성
// 2) 보고 싶은 영화 목록 Set 객체로 생성
// 3) 시청한 영화 목록과 보고 싶은 영화 목록 각각 출력
// 4) "파이트 클럽"이라는 영화를 시청했는지 확인하고 없다면 시청한 영화에 추가하고, 보고 싶은 영화에서 삭제
// 5) 업데이트 된 시청한 영화 목록과 보고 싶은 영화 목록 재출력

let viewSet = new Set();

viewSet.add("인셉션");
viewSet.add("매트릭스");
viewSet.add("인터스텔라");

let wishSet = new Set();

wishSet.add("파이트 클럽");
wishSet.add("더 울프 오브 월 스트리트");
wishSet.add("노인을 위한 나라는 없다");

// 생성자에 배열을 넣을 경우 데이터를 한 번에 추가할 수 있음
// new Set([배열]);
const wishSet2 = new Set(["파이트 클럽", "더 울프 오브 월 스트리트", "인터스텔라"]);

function viewList() {
  console.log("시청한 영화 목록:")
  for (let movie of viewSet) {
    console.log(movie);
  }
  console.log();
};

function wishList() {
  console.log("보고 싶은 영화 목록:")
  for (let movie of wishSet) {
    console.log(movie);
  }
  console.log();
};

viewList();
wishList();

let movieCk = "파이트 클럽";
if (!viewSet.has(movieCk)) {
  viewSet.add(movieCk);
  wishSet.delete(movieCk);
  console.log(movieCk + "을(를) 시청한 영화 목록에 추가하고, 보고 싶은 영화 목록에서 삭제했습니다.")
  console.log();
} else {
  console.log(movieCk + "을(를) 시청했습니다.")
  console.log();
}

viewList();
wishList();


// Q18. 책 목록을 관리하는 프로그램 작성

// 1) 읽은 책 목록 Set 객체로 생성
// 2) 제목이 7글자 이상인 책 삭제
// 3) 친구가 읽은 책 목록 Set 객체로 생성
// 4) 내가 읽은 책 목록과 친구가 읽은 책 목록 각각 출력
// 5) 공통으로 읽은 책을 찾아서 출력

let readBook = new Set();

readBook.add("해리포터");
readBook.add("반지의 제왕");
readBook.add("어린왕자");
readBook.add("데미안");
readBook.add("1984");
readBook.add("위대한 개츠비");

console.log("현재 읽은 책 목록:")
for (let title of readBook) {
  console.log(title);
}
console.log();

for (let title of readBook) {
  if (title.length >= 7) {
    readBook.delete(title);
    console.log(title + "을(를) 책 목록에서 삭제했습니다.")
  }
}
console.log();

let friendBook = new Set();

friendBook.add("어린왕자");
friendBook.add("1984");
friendBook.add("노인과 바다");
friendBook.add("그리스인 조르바");

console.log("친구가 읽은 책 목록:")
for (let title of friendBook) {
  console.log(title);
}
console.log();

console.log("두 명의 사용자가 공통으로 읽은 책:")
for (let title of readBook) {
  if (friendBook.has(title)) {
    console.log(title)
    console.log();
  }
};


// Q19. 연락처를 관리하는 프로그램 작성

// 1) 연락처 목록 Map 객체로 생성
// 2) "동민"의 연락처가 존재하는지 확인하고, 존재한다면 전화번호를 "010-9999-9999"로 수정
// 3) "지영"의 연락처가 존재하는지 확인하고, 존재한다면 연락처 삭제
// 4) 현재 연락처 목록 출력
// 5) 전체 연락처 개수 출력

let contact = new Map();

contact.set("민수", { phone: "010-1234-5678", address: "서울특별시 강남구"});
contact.set("지영", { phone: "010-8765-4321", address: "부산광역시 해운대구"});
contact.set("현우", { phone: "010-2345-6789", address: "대구광역시 수성구"});
contact.set("수빈", { phone: "010-9876-5432", address: "인천광역시 남동구"});
contact.set("동민", { phone: "010-3456-7890", address: "광주광역시 서구"});
contact.set("하은", { phone: "010-6543-2109", address: "대전광역시 유성구"});

console.log("연락처 목록:");
for (let [key, value] of contact) {
  console.log(key + ": " + value.phone + ", " + value.address)
}
console.log();

if (contact.has("동민")) {
  contact.set("동민", { phone: "010-9999-9999", address: "광주광역시 서구"});
  console.log("동민의 연락처를 수정했습니다.")
  console.log();
}

if (contact.has("지영")) {
  contact.delete("지영");
  console.log("지영의 연락처를 삭제했습니다.")
  console.log();
}

console.log("현재 연락처 목록:");
for (let [key, value] of contact) {
  console.log(key + ": " + value.phone + ", " + value.address)
}
console.log();

console.log("현재 연락처 개수: " + contact.size);
console.log();


// Q19. 학생 정보를 관리하는 프로그램 작성

// 1) 학생 목록 Map 객체로 생성
// 2) 3학년 학생들의 전공을 모두 융합 공학으로 변경
// 3) 이름이 "정예린"인 학생이 있다면, 해당 학생의 정보 출력
// 4) 각 학년별로 몇 명의 학생이 있는지 계산하고, 출력

let studentList = new Map();

studentList.set("김민준", {grade: "2학년", major: "컴퓨터공학"});
studentList.set("이서윤", {grade: "3학년", major: "경영학"});
studentList.set("박지호", {grade: "1학년", major: "물리학"});
studentList.set("최지민", {grade: "4학년", major: "화학"});
studentList.set("정예린", {grade: "2학년", major: "수학"});
studentList.set("한지우", {grade: "3학년", major: "영어영문학"});

console.log("학생 목록:");
for (let [key, value] of studentList) {
  console.log(key + ": " + value.grade + ", " + value.major)
};
console.log();

for (let [key, value] of studentList) {
  if (value.grade == "3학년") {
    studentList.set(key, {grade: "3학년", major: "융합공학"});
  };
};
console.log("3학년 학생들의 전공을 융합공학으로 변경하였습니다.")
console.log();

console.log("학생 목록:");
for (let [key, value] of studentList) {
  console.log(key + ": " + value.grade + ", " + value.major);
};
console.log();

for (let [key, value] of studentList) {
  if (key == "정예린") {
    console.log(key + ": " + value.grade + ", " + value.major);
  }
}
console.log();

let studentCount = new Map();

console.log("학년별 학생 수: ");
for (let [key, value] of studentList) {
  if (studentCount.has(value.grade)) {
    studentCount.set(value.grade, studentCount.get(value.grade)+1)
  } else {
    studentCount.set(value.grade, 1)
  }
}

studentCount.forEach(
  function (value, key) {
    console.log(key + ": " + value + "명")
  }
);
console.log();