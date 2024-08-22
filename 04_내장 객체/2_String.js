// String 객체: 문자열을 생성

// length: 문자열의 길이
let txt = "ABCDE";
console.log("문자열의 길이: " + txt.length);

// indexOf: 특정 문자열이 존재하는지 확인하고, index(위치)를 반환
let str = "안녕하세요, 저는 둘리입니다.";
let result = str.indexOf("둘리");
console.log("검색_둘리: " + result);
console.log("검색_또치: " + str.indexOf("또치"));

// lastIndexOf: 찾고자 하는 문자열이 둘 이상 발견되면, 제일 마지막에 발견된 문자열의 index(위치)를 반환
let dooli = "둘리 둘리 둘리";
console.log("검색_둘리: " + dooli.lastIndexOf("둘리"));
console.log("검색_또치: " + dooli.lastIndexOf("또치"));

// slice(start, end): 문자열에서 해당 부분을 잘라서 반환
let fruit = "사과, 바나나, 키위";
console.log("index[9]부터 [11] 직전까지의 글자 반환: " + fruit.slice(9, 11)); 
console.log("index[9]부터 끝까지 글자 반환: " + fruit.slice(9));

// substring(start, end): slice랑 비슷함
console.log("index[9]부터 [11] 직전까지의 글자 반환: " + fruit.substring(9, 11));
console.log("index[9]부터 끝까지 글자 반환: " + fruit.substring(11, 9));
// start와 end의 위치가 바뀌었으면 (start보다 end의 값이 작다면) 자동으로 위치를 교환해서 처리
// 에러가 뜨기 쉽기 때문에 slice를 더 잘 씀

// replace: 특정 문자열을 다른 문자열로 교체하는 함수
console.log("문자열 교체: " + fruit.replace("바나나", "딸기"));
// "사과, 바나나, 키위" -> "사과, 딸기, 키위"

// toUpperCase: 문자열을 모두 대문자로 변경하는 함수
// toLowerCase: 문자열을 모두 소문자로 변경하는 함수
let hello = "Hello, World!";
console.log("대문자로 변경: " + hello.toUpperCase()); // HELLO, WORLD!
console.log("소문자로 변경: " + hello.toLowerCase()); // hello, world!
// 원본 데이터가 알파벳인 경우에만 적용

// 2개 이상의 문자열을 연결하는 함수
let str1 = "Hello,";
let str2 = "World!";
let newStr = str1.concat(" ", str2);
console.log("문자열 연결: " + newStr); // Hello, World!

// 앞, 뒤 공백을 제거하는 함수
console.log("앞뒤 공백 제거: " + "          Hello, World!       ".trim()); // Hello, World!

// 지정된 문자를 지정된 길이만큼 추가하는 함수 
let number = "5";
console.log("앞에 지정된 문자 n개 추가: " + number.padStart(4, 0)); // 0005
console.log("뒤에 지정된 문자 n개 추가: " + number.padEnd(4, 0)); // 5000

// 특정 인덱스에 있는 문자 하나를 반환하는 함수
console.log("특정 인덱스의 문자 반환: " + "Hello, World!".charAt(1)); // H

// 구분자를 기준으로 문자열을 쪼개는 함수
let birthday = "1997-06-12";
console.log("구분자를 기준으로 문자열 쪼개기: " + birthday.split("-")); // [ '1997', '06', '12' ]

// 문자열이 특정 값으로 시작되는지 확인하는 함수
let url = "http://website.com";
if (url.startsWith("http://")) {
  console.log("올바른 형식의 사이트 주소입니다!")
} else {
  console.log("잘못된 형식의 사이트 주소입니다….")
}

// 문자열이 특정 값으로 끝나는지 확인하는 함수
let file = "abc.pdf";
if (file.endsWith(".pdf")) {
  console.log("pdf 파일이 맞습니다!")
} else {
  console.log("pdf 형식의 파일이 아닙니다….")
}

// 문자열은 배열처럼 사용 가능, 인덱스 사용 가능
let string = "Hello!";
console.log("0번째 index: " + string[0]); // "H"
console.log("1번째 index: " + string[1]); // "e"

for (let str of string) {
  console.log(str);
}

// "H" "e" "l" "l" "o" "!"