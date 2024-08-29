// Q29. 문자열 "I have 2 apples and 3 oranges."에서 숫자(0-9)를 모두 찾아 배열로 반환.

let str = "I have 2 apples and 3 oranges.";
let patt = /[0-9]/g;
let result = str.match(patt);

console.log(`문자열: "${str}"`);
console.log("결과:", result);


// Q30. 문자열 "Hello, JavaScript is fun!"에서 소문자 'a', 'e', 'i', 'o', 'u' 중 하나라도 포함된 문자를 모두 찾아 배열로 반환.

str = "Hello, JavaScript is fun!";
patt = /[aeiou]/g;
result = str.match(patt);

console.log(`문자열: "${str}"`);
console.log("결과:", result);


// Q31. 문자열 "Welcome to the world of coding!"에 'coding'라는 단어가 포함되어 있는지 확인.

str = "Welcome to the world of coding!";
patt = /coding/;
result = patt.test(str)

console.log(`문자열: "${str}"`);
console.log("결과:", result);


// Q32. 문자열 "JavaScript is powerful"에서 'is'라는 단어가 처음으로 등장하는 위치의 인덱스를 반환.

str = "JavaScript is powerful";
patt = /is/;
result = str.search(patt);

console.log(`문자열: "${str}"`);
console.log("결과:", result);


// Q33. 문자열 "banana"에서 'a' 문자가 하나 이상 연속된 부분을 모두 찾아 배열로 반환.

str = "banana";
patt = /a+/g;
result = str.match(patt);

console.log(`문자열: "${str}"`);
console.log("결과:", result);


// Q34. 문자열 "abc123ABC"에서 대소문자 구분 없이 'abc'를 찾아 결과를 배열로 반환.

str = "abc123ABC";
patt = /abc/gi;
result = str.match(patt);

console.log(`문자열: "${str}"`);
console.log("결과:", result);


// Q35. 문자열 "Hello, World! How are you today?"에서 대문자를 모두 찾아 배열로 반환.

str = "Hello, World! How are you today?";
patt = /[A-Z]/g;
result = str.match(patt);

console.log(`문자열: "${str}"`);
console.log("결과:", result);


// Q36. 문자열 "2024-08-27"에서 연도, 월, 일을 각각 나누어 추출.

str = "2024-08-27"
patt = /(\d{4})-(\d{2})-(\d{2})/;
result = str.match(patt)

// \d: 숫자
// {숫자}: 앞의 패턴이 지정된 횟수만큼 반복됨
// (): 캡쳐 그룹으로, 일치하는 부분만 문자열로 묶어서 추출
// (\d{4}): 첫 번째 그룹 (연도)
// (\d{2}): 두 번째 그룹 (월)
// (\d{2}): 세 번째 그룹 (일)

console.log(`문자열: "${str}"`);
console.log("결과:", result);

let str8 = "2024-08-27";
let dateParts = str8.match(/(\d{4})-(\d{2})-(\d{2})/); //숫자4개-숫자2개-숫자2개
console.log(dateParts); 