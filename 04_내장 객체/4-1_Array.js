// toString: 배열을 문자열로 반환
var fruits = ["바나나", "오렌지", "사과", "망고"];
console.log(fruits.toString()); // 바나나, 오렌지, 사과, 망고

// join: 배열 요소를 지정한 구분자로 연출
console.log(fruits.join(' * ')); // 바나나 * 오렌지 * 사과 * 망고

// pop: 배열의 마지막 요소를 제거하고 반환 
var x = fruits.pop()// x = "망고";
console.log(x);

// push: 끝에 새로운 요소를 추가
fruits.push("키위"); // 키위를 "fruits" 배열에 추가
console.log(fruits)

// unshift: 배열 앞에 새로운 요소를 추가, 배열의 길이 반환
var len = fruits.unshift("레몬");
console.log(len);
console.log(fruits);

// 첫 번째 요소를 "체리"로 변경
fruits[0] = "체리";
console.log(fruits);

//splice: 특정 위치에 새로운 요소를 추가 또는 삭제
// 새로운 요소를 추가할 인덱스 번호,
// 추가하기 전에 삭제할 인덱스 요소 수, 나머지: 추가할 요소

// 2번째 인덱스에 "딸기" "메론" 추가
fruits.splice(2, 1,  "딸기", "메론");
// splice([2]번째 인덱스부터 [0]개의 요소를 삭제하고, ["딸기, "메론"] 등 내용 추가)

// [체리, 바나나, 오렌지, 사과, 키위]];
// => [체리, 바나나, 딸기, 메론, 사과, 키위]
console.log(fruits);

// slice: 배열의 일부를 잘라내서 새로운 배열을 반환
// 시작 인덱스 (마지막 인덱스 생략 시 마지막까지)
console.log(fruits.slice(3)); // [메론, 사과, 키위] 
// 시작 인덱스, 마지막 인덱스
// 1번부터 3번 직전까지 
console.log(fruits.slice(1, 3)); // [바나나, 딸기] 

// concat: 여러 배열을 하나로 합치기
var arr1 = ["토마토", "오이"];
var arr2 = ["당근", "감자", "양파"];
var arr3 = ["호박", "배추"];
var vegetable = arr1.concat(arr2, arr3);
console.log(vegetable);

// forEach: 배열의 각 요소에 대해 반복적인 작업 실행
// 인자: 함수
vegetable.forEach(

  // 배열의 요소와 인덱스  
  function(item, index) {
    console.log("야채 " + index + ": " + item)}

);