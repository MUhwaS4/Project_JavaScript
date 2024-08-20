// 대입연산자
let x = 1; // x에 1을 저장

// 비교 연산자
console.log(1 == 2); // 값이 같으면 참
console.log(1 != 2); // 값이 다르면 참
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

console.log(1 == "1"); // ==: 자료형 관계없이 값이 동일한지만 비교
console.log(1 === "1"); // ===: 자료형과 값이 모두 동일한지 비교

// 산술 연산자
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 + 2);
console.log(10 % 2);

// 문자열 결합 연산자
console.log("좋은 " + "하루 되세요!");

// 부호 연산자
console.log(-x); // 부호를 반대로 변경하여 음수를 출력
console.log(x); // 원본 데이터에는 영향이 없음

// 증감 연산자
console.log(++x); // 2 > 출력 이전 1에서 2로 증가
console.log(x++); // 2 > 출력 이후 3으로 증가
console.log(--x); // 2 > 출력 이전 3에서 2로 감소
console.log(x--); // 2 > 출력 이후 1로 감소

// 논리 연산자
// &&: 논리곱, 두 항이 모두 참이면 참
// ||: 논리합, 두 항 중 하나라도 참이면 참
// !: 부정, 값을 반대로 변경
console.log(true && true); // 참
console.log(true && false); // 거짓
console.log(true || true); // 참 
console.log(true || false); // 참
console.log(!true); // 거짓

// 삼항 연산자
let point = 92;
let grade = point >= 90 ? "pass" : "fail";
console.log(grade);
// 점수가 90점 이상이면 pass 아니면 fail
console.log(1 <= 2? '빅토리':'밀레니엄 걸즈');

// typeof 연산자: 값의 타입을 확인하는 연산자
console.log(typeof "42"); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof 1.123); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof function () {}); // 'function'
console.log(typeof undefined); // 'undefined'
console.log(typeof {}); // 'undefined'
console.log(typeof []); // 'undefined'