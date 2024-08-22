// Q1. 이메일의 도메인 확인.

let email = "user@naver.com";
let domain = email.split("@")[1];

console.log("이메일: " + email);
console.log("도메인: " + domain);


// Q2. 다음 메시지에 금지어가 있으면 ×××로 변경하여 출력하고, 없으면 그대로 출력.

// 금지어 목록
const errorM = ["나쁜", "더러운"];
let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아.";

// 금지어를 ××로 대체
let edit1 = message;
for (let word of errorM) {
  edit1 = edit1.replace(word, "×".repeat(word.length));
  // word의 배열을 순회하면서 ×로 교체
  // repeat: ×의 길이를 유동적으로 변경할 수 있음
}

// for를 사용하지 않고 replace만으로 내용 변경
let edit2 = message.replace("나쁜", "××").replace("더러운", "×××");

console.log("금지어: " + errorM);
console.log("메시지: " + message);
console.log("결과1: " + edit1)
console.log("결과2: " + edit2)


// Q3. 파일의 확장자가‘.jpg’ ‘.png’ ‘.gif’가 아니라면 "지원되지 않는 파일 형식입니다"라는 메시지 출력.

// 확장자가 무엇으로 끝나는지 endsWith로 확인
let file = "사과.txt";
if (file.endsWith == '.txt' || file.endsWith == '.png' || file.endsWith == '.gif') {
  console.log(file + "는 지원하는 파일 형식입니다.")
} else {
  console.log(file + "는 지원하지 않는 파일 형식입니다.")
}

// 확장자 목록을 배열로 저장한 뒤 비교
const allowed = [".jpg", ".png", ".gif"];
const index = file.lastIndexOf(".");
const extension = file.slice(index);

if (!allowed.includes(extension)) {
  console.log(file + "는 지원하지 않는 파일 형식입니다.")
} else {
  console.log(file + "는 지원하는 파일 형식입니다.")
}


// Q4. 문자열의 모든 자리수를 더해서 합 계산.
let number = "0112233";
let sum = 0;
for (let num of number) {
  sum = sum + parseInt(num); // num은 현재 string 타입이기 때문에 정수로 변경한 뒤에 더해야 함
}
console.log(number + "의 모든 자리수의 합: " + sum)


// Q5. 배열의 요소들 중 숫자로 취급할 수 있는 값들을 모두 더한 합을 출력.
// 단, 배열에는 다양한 자료형이 포함될 수 있음.

let arr = [1, "aa", true, "5", 10];
let hap = 0;
let hap2 = 0;

for (let i=0; i<arr.length; i++) {
  if (isNaN(arr[i]) == false) {

    if (typeof arr[i] != 'number') {
      hap = hap + Number(arr[i])
    } else {
      hap = hap + parseFloat(arr[i])
    }
  }
}

for (let v of arr) {
  if (!isNaN(v)) {

    if (typeof v == 'number' || typeof v == 'boolean') {
      hap2 = hap2 + v;
    } else if (typeof v == 'string'){
      hap2 = hap2 + parseInt(v)
    }
  }
}

console.log("배열의 모든 숫자의 합: " + hap)
console.log("배열의 모든 숫자의 합: " + hap2)

// Q6. 주어진 문자열에서 연속된 동일한 문자들이 몇 번 반복되는지 세고, 이를 "문자+숫자" 형식으로 압축
const text = "aaabbc";

let countText = "";
let count = 1;

  for (let i=0; i<text.length; i++) {
    if (text[i] === text[i+1]) {
      count++;
    } else {
      countText = countText + text[i] + count;
      count = 1; // 카운트 초기화
    }
  }

  console.log(countText);