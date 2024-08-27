// Q1. 사용자의 이름과 인삿말을 입력받아 인사를 만드는 함수 정의.

function greet(name, say = "안녕하세요") {
  // console.log(`${say}, ${name}님!`);
  return say + ", " + name + "님!"
};

console.log(greet("철수", "반갑습니다!"));
console.log(greet("훈이"));


// Q2. 학생의 영어, 수학, 국어 점수를 입력받아 평균 점수를 출력하는 함수 정의.

function calculateGrade(student, ...score) {
 let total = 0;
 for (let x of score) {
  total += x;
 }
 let average = (total/3).toFixed(2)
  return `${student}님의 평균 성적은 ${average}점입니다.`
}

console.log(calculateGrade("철수", 85, 90, 78));
console.log(calculateGrade("훈이", 80));


// Q3. 단어 여러 개를 입력받아 하나의 문장으로 만드는 함수 정의.
// 단, 첫 번째 단어는 무시하고 나머지 단어들로만 문장 작성.

function createSentence(text, ...say) {
  return say.join(" ")
}

console.log(createSentence("Hello", "this", "is", "JavaScript"))


// Q4. 사람의 정보를 입력받아 출력하는 함수 정의.

function printPerson(name, age, ...hobby) {
  let hobbyList = hobby.join(", ")
  console.log(`${name}의 나이는 ${age}살이고, 취미는 ${hobbyList}입니다.`)
}

printPerson("맹구", 5, "축구", "독서", "영화 감상");
printPerson("유리", 5, "소꿉놀이");


// Q5. 학생들의 성적을 계산하는 프로그램 생성. 

// 1) 여러 학생을 인자로 입력받아, 특정 과목의 평균 점수를 반환하는 함수 정의.
// 2) 만약 학생이 해당 과목의 점수를 가지고 있지 않으면 계산하지 않고, 해당 학생은 건너뛰기.
// 예) 맹구와 유리의 수학 과목의 평균 점수 (80)/1 = 80점

let studentList = [
  { name: "짱구", eng: 80, math: 50, kor: 70 },
  { name: "철수", eng: 90, math: 85, kor: 88 },
  { name: "훈이", eng: 75, math: 95, kor: 92 },
  { name: "맹구", eng: 65 },
  { name: "유리", math: 50, kor: 90 }
]

function aveScore(sub, ...student) {

  let fillterStudents = student.filter(
    function(student) {
      return typeof student[sub] != 'undefined'
    }
  );

  for (let list of student) {
    for (let a of studentList) {
      if (list == a.name) {
        list = {sub: a.sub}
      }
    }
  }

  let count = student.length
  let total = 0;
  for (let x of studentList) {
    if (x.sub != undefined) {
      total += x.sub
      count++;
    }
  }
  let ave = total/count
  console.log(student.join(", ") + "의 영어 과목의 평균 점수는 " + ave + "점입니다.")
}

aveScore("짱구", "철수", "훈이", "맹구")


// Q6. 상품들의 가격을 계산하는 프로그램 생성.
// 여러 상품을 인자로 입력받아, 평균 가격을 반환하는 함수 정의.
// 각 상품의 할인율을 적용하여 최종 가격을 계산해야 함.
// 예) 새우깡의 최종 가격: 1500 * 0.9 = 1350원

let productList = [
  { name: "새우깡", price: 1500, discount: 10 },
  { name: "홈런볼", price: 2000, discount: 5 },
  { name: "포카칩", price: 2500 },
  { name: "칙촉", price: 3000, discount: 15 },
  { name: "오잉", price: 1800 },
]

function productAve(...product) {  
  let list = new Map();

  for (let pro of productList) {
    let dis = 0;
    if (pro.discount != undefined) {
      dis = pro.discount
    } else {
      dis = 0
    }
    pro.price = pro.price * (100-dis)/100
    list.set(pro.name, pro.price)

    for (let [key, value] of list) {
    }
  }

  console.log(list)
}

productAve("새우깡", "홈런볼", "포카칩");