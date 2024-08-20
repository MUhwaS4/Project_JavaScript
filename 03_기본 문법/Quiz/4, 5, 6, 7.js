// Q4-1. 변수 x가 10보다 크고 20보다 작을 때 x를 출력하는 조건식 작성.

let x = 15;
if (10 < x && x < 20) {
  console.log("x: " + x)
}

// Q4-2. 문자열 str의 길이가 5보다 길면 str을 출력하는 조건식 작성.

let str = "가나다라마바사";
if (str.length > 5) {
  console.log("str: " + str)
}

// Q4-3. 객체 person의 나이가 20살 미만이고 성별이 남자면, "남학생입니다"를 출력하는 조건식 작성.
const person = {
  age: 15,
  gender: "M",
  name: "둘리",
  address: "서울"
}
if (person.age < 20 && person.gender == "M") {
  console.log("남학생입니다.");
}

// Q4-4. 배열에 숫자 10이 포함되어 있으면 "배열에 10이 있습니다"를 출력하고, 없으면 "10이 배열에 없습니다."를 출력하는 조건식 작성.

const arr = [5, 12, 8, 130, 44];

if (arr.includes(10)) {
  console.log("배열에 10이 있습니다.")
} else {
  console.log("10이 배열에 없습니다.")
}

// Q5-1. 반복문을 사용하여 1부터 10까지의 수 중에서 짝수만 출력.
for (let i=1; i<=10;i++) {
  if (i%2 == 0) {
    console.log(i);
  }
}

// Q5-2. 반복문을 사용하여 1부터 10까지의 수 중에서 홀수만, 큰 수부터 출력.
for (let i=10; i>0; i--) {
  if (i%2 != 0) {
    console.log(i);
  }
}

// Q5-3. 반복문을 사용하여 1부터 10까지의 수의 합을 출력.
let sum1 = 0;
for (let i=1; i<=10; i++) {
  sum1 = sum1 + i
}
console.log("1부터 10까지 수의 합: " + sum1)

// Q5-4. 반복문을 사용하여 1부터 20까지의 수 중에서 3의 배수 또는 5의 배수의 합을 구하기.
let sum2 = 0;
for (let i=1; i<=20; i++) {
  if (i%3==0 || i%5==0) {
    sum2 = sum2 + i
  }
}
console.log("1부터 20까지 수 중 3의 배우와 5의 배수 합: " + sum2)

// Q6. 배열에 있는 모든 숫자를 더해서 합을 구하기.

const arr2 = [1,'aa', true, 5, 10];
let sum3 = 0;
for (let i=0; i<arr2.length; i++) {
  if (typeof arr2[i] == 'number') {
    sum3 = sum3 + arr2[i]
  }
}
console.log("배열에 있는 모든 숫자의 합: " + sum3)

// Q7-1. 5×3 크기의 사각형을 별(*)로 출력. 너비가 5고 높이가 3.

for (let i=0; i<3; i++) {
  for (let j=0; j<5; j++) {
    process.stdout.write("*");
  }
  console.log();
}

console.log();

for (let i=0; i<3; i++) {
  let stars = "";
  for (let j=0; j<5; j++) {
    stars = stars + "*"
  }
  console.log(stars);
}

// Q7-2. 5×5 크기의 삼각형을 별(*)로 출력.

for (let i=0; i<=5; i++) {
  for (let j=0; j<i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i=0; i<=5; i++) {
  let stars = "";
  for (let j=0; j<i; j++) {
    stars = stars + "*"
  }
  console.log(stars);
}