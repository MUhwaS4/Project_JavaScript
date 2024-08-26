// May: 키*값 쌍으로 데이터를 저장하는 객체

let userMap = new Map();

// 새로운 데이터 추가
userMap.set("name", "홍길동");
userMap.set("email", "abc@email.com");
userMap.set("phone", "000-0000-0000");
console.log(userMap);

// 데이터 수정
// 자바의 경우엔 지정된 형으로만 수정이 가능하지만, 자바스크립트는 자유롭게 수정 가능
userMap.set("phone", 100)
console.log(userMap);

// Map의 크기 확인
console.log(userMap.size);

// 특정 키의 데이터 가져오기
console.log(userMap.get("name")); // "홍길동"

// 특정 키의 데이터 가져오기
console.log(userMap.has("name")); // "ture
console.log(userMap.has("a")); // "false

// 특정 데이터 삭제 
userMap.delete("name"); // key 사용
console.log(userMap);

// Map에 저장된 모든 데이터 출력
userMap.forEach(
  function (a , b) {
    console.log(a, b)
  }
);

// 구조 분해 할당으로 Map의 각 키와 값 출력
for  (let [key, value] of userMap) {
  console.log(key, value)
}

for (let value of userMap) {
  console.log(value);
};

// 저장된 모든 값을 삭제
userMap.clear();
console.log(userMap); // Map(0) {}