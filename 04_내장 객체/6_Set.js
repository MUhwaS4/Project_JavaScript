// Set: 중복되지 않은 값들을 저장하는 객체, 순서(index) 없음

var mySet = new Set();

// 새로운 값 추가
mySet.add(1);
mySet.add(2);
mySet.add(3);

// 중복된 값 추가해보기
mySet.add(1);

// 중복된 값(1)은 이미 저장되어 있기 때문에 Set에 추가되지 않음
console.log(mySet); 

// Set의 크기
console.log("크기:", mySet.size); // 3

// 값이 있는지 확인
console.log("1을 가지고 있나요?", mySet.has(1)); // true

// 특정 값을 삭제
mySet.delete(2);
console.log(mySet);

// set에 저장된 모든 값 출력
// forEach: set의 모든 요소를 순회하며 함수 실행
mySet.forEach(function (item) {
  console.log(item);
});

// for of 반복문을 사용하여 Set 순회
for (let value of mySet) {
  console.log(value);
}

// 지정된 모든 값을 삭제
mySet.clear();
console.log(mySet); //