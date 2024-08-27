// Q5. 학생들의 성적을 계산하는 프로그램 생성. 

// 1) 여러 학생을 인자로 입력받아, 특정 과목의 평균 점수를 반환하는 함수 정의.
// 2) 만약 학생이 해당 과목의 점수를 가지고 있지 않으면 계산하지 않고, 해당 학생은 건너뛰기.
// 예) 맹구와 유리의 수학 과목의 평균 점수 (80)/1 = 80점

const student1 = { name: "짱구", eng: 80, math: 50, kor: 70 };
const student2 = { name: "철수", eng: 90, math: 85, kor: 88 };
const student3 = { name: "훈이", eng: 75, math: 95, kor: 92 };
const student4 = { name: "맹구", eng: 65 };
const student5 = { name: "유리", math: 80, kor: 90 };

function showStudent(...student) {
  console.log("학생 목록: ");
  student.forEach(
    function (student) {
      console.log(student);
      console.log();
    }
  );
}

function aveScore(sub, ...student) {

  let fillterStudents = student.filter(
    function(student) {
      return typeof student[sub] != 'undefined'
    }
  );

  let sum = fillterStudents.reduce(
    function (total, stu) {
      return total += stu[sub]
    }, 0
  );

  let count = fillterStudents.length

  return (sum/count).toFixed(1);
  // console.log(student.join(", ") + "의 영어 과목의 평균 점수는 " + ave + "점입니다.")
}

const engAvg = aveScore("eng", student1, student2, student3, student4);
const mathAvg = aveScore("math", student4, student5);
const korAvg = aveScore("kor", student1, student2, student3, student4, student5);

console.log(`짱구, 철수, 훈이, 맹구의 영어 과목의 평균점수는 ${engAvg}점 입니다`); //77.5
console.log(`맹구와 유리의 수학 과목의 평균점수는 ${mathAvg}점 입니다`); //80.0
console.log(`국어 과목의 전체 평균점수는 ${korAvg}점 입니다`); //85.0