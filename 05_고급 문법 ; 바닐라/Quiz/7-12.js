// Q7. 다음의 익명 함수를 화살표 함수로 변환

  const add1 = function(a, b) {
    return a + b;
  };

const add2 = (a, b) => a + b;

console.log(add2(5, 10));
console.log();


// Q8. 다음의 익명 함수를 화살표 함수로 변환

  const greet1 = function() {
    return "Hello, World!";
  };

const greet2 = () => "Hello, World!";

console.log(greet2());
console.log();


// Q9. 다음의 익명 함수를 화살표 함수로 변환

  const logSum1 = function(a, b) {
    console.log(a + b);
  };

const logSum2 = (a, b) => console.log(a + b);

logSum2(5, 10);
console.log();


// Q10. 다음의 익명 함수를 화살표 함수로 변환

  const multiplyAndAdd1 = function(a, b, c) {
    const temp = a * b;
    const result = temp + c;
    return result;
  };

const multiplyAndAdd2 = (a, b, c) => {
  const temp = a * b;
  const result = temp + c;
  return result;
};

console.log(multiplyAndAdd2(5, 10, 5));
console.log();


// Q11. map에서 사용한 익명 함수를 화살표 함수로 변환

  const numbers1 = [1, 2, 3, 4, 5];
  const doubled1 = numbers1.map(function(number) {
    return number * 2;
  });

const numbers2 = [1, 2, 3, 4, 5];
const doubled2 = numbers2.map(number => number * 2);

console.log(doubled2);
console.log();


// Q12. filter에서 사용한 익명 함수를 화살표 함수로 변환

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers1 = arr1.filter(function(number) {
    return number % 2 == 0;
  });

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers2 = arr2.filter(number => number%2 == 0);

console.log(evenNumbers2);
console.log();