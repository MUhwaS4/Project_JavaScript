// Q8. 두 개의 정수를 입력받아 첫 번째 수에서 두 번째 수를 빼는 함수 작성.

function minus(x, y) {
  return x-y
}

console.log("빼기: " + minus(5,3));

// Q9. 두 개의 정수를 입력받아 그 사이의 모든 숫자의 합을 반환하는 함수 작성.

function sum(x, y) {
  let hap = 0;
  for (let i = x; i<=y; i++) {
    hap = hap + i;
  }
  return hap;
}

console.log("숫자 사이의 합: " + sum(3, 5));

// Q10. 숫자 배열을 입력받아, 배열에서 가장 큰 숫자를 반환하는 함수 작성.

function numMax(arr) {
  const num = arr;
  let max = num[0];
  for (let i=0; i<num.length; i++) {
    if (max < num[i]) {
      max = num[i]
    }
  }
  return max;
}

console.log("배열에서 가장 큰 숫자: " + numMax([-1, 5, 10, -3]));

// Q11. 배열을 입력 받아, 모두 같은 자료형으로 이루어져 있는지 확인하는 함수 작성.
function typeCk(arr) {
  const list = arr;
  for (let i=0; i<list.length; i++) {
    if (typeof list[i] != typeof list[0]) {
      return false;
    }
  }  
  return true;
}

console.log("모두 같은 자료형인가? " + typeCk(["a", "b", "c"]));

// Q12. 문자열 배열과 특정 문자열을 입력받아, 특정값이 있는지 참거짓을 반환하는 함수 작성.

function textList(arr, text) {
  const textArr = arr;
  let textCk = textArr.includes(text);
  return textCk;
}

console.log("특정한 값이 배열에 있는가? " + textList(["apple", "banana", "cherry"], "banana"));

// Q13. 정수를 입력 받아 그 숫자의 구구단을 출력하는 함수 작성.

function multiplication(num) {
  for (let i=1; i<=9; i++) {
    console.log(num + "*" + i + "=" + (num*i))
  }
}

multiplication(2);

// Q14. 다양한 값으로 구성된 배열을 입력 받아, 그 중에서 문자열만 골라서 새로운 배열로 반환하는 함수 작성.

function manyList(arr) {
  const toList = arr;
  const strList = [];
  for (let i=0; i<toList.length; i++) {
    if (typeof toList[i] == 'string') {
      strList.push(toList[i]);
    }
  }
  return strList;
}

console.log(manyList([1, "apple", true, "banana", 42, "cherry"]));

// Q15. 숫자를 입력 받아, 팩토리얼을 계산하여 반환하는 함수 작성.

// function factorial(num) {
//   let multiplication = 0;
//   let number = 1;
//   for (let i=1; i<=num; i++) {
//     multiplication = multiplication + (num * number);
//   }
//   return multiplication;
//   그냥 이렇게 계산하면 합 더하는 거랑 다를 게 없음 ... 곱셈하는 법 찾아야 함
// }

function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num-1))
  }
}

console.log("팩토리얼: " + factorial(5));


// Q16. 학생 객체 배열을 입력 받아, 특정 과목의 평균 점수를 반환하는 함수 작성.

const student = [
  {name: "둘리", math: 90, english: 85},
  {name: "또치", math: 80, english: 95},
  {name: "도우너", math: 70, english: 75},
]

function scoreCk(arr, subject) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum = sum + arr[i][subject]; // 객체 속성에 동적으로 접근하기 위해 대괄호 표기법 사용
  }
  let average = sum/arr.length;
  return average;
};

console.log("수학 평균: " + scoreCk(student, 'math'));
console.log("영어 평균: " + scoreCk(student, 'english'));

// Q17. 직원 객체 배열을 입력 받아, 특정 직급의 평균 월급을 반환하는 함수를 만드세요.

const employees = [
  {name: "짱구", position: "부장", salary: 500},
  {name: "철수", position: "차장", salary: 380},
  {name: "훈이", position: "사원", salary: 260},
  {name: "맹구", position: "차장", salary: 420},
  {name: "유리", position: "사원", salary: 220},
]

function salaryCk(arr, pos) {
  let sum = 0;
  let conut = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i].position == pos) {
      sum = sum + arr[i].salary;
      conut++;
    }
  }
  let average = sum/conut;
  return average;
};

console.log("사원의 평균 월급: " + salaryCk(employees, '사원'));