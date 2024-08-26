// Q21. 7.5를 반올림하여 정수로 출력.

console.log("반올림: " + Math.round(7.5));


// Q22. 5.9를 무조건 내림하여 정수로 출력.

console.log("내림: " + Math.ceil(5.9));


// Q23. 42의 부호를 나타내는 값을 출력. (양수=1 / 음수-2 / 0=0)

console.log("부호: " + Math.sign(42));


// Q24. 10, 20, 30, 40, 50 중에서 가장 작은 숫자.

console.log("가장 작은 숫자: " + Math.min(10, 20, 30, 40, 50));


// Q25. 3, 6, 9, 12, 15 중에서 가장 큰 숫자.

console.log("가장 큰 숫자: " + Math.max(3, 6, 9, 12, 15));


// Q26. 1에서 6까지의 숫자를 무작위로 생성하는 6면체 주사위. 주사위를 던지고 결과 출력.

console.log("주사위 결과: " + (Math.floor(Math.random() * 6) +1));


// Q27. 주사위를 10번 던지고, 각 결과를 배열에 저장.

const diceRoll = [];

for (let i=0; i<10; i++) {
  let dice = Math.floor(Math.random() * 6) +1;
  diceRoll.push(dice);
}

console.log("10번 던진 결과: " + diceRoll)


// Q28. 다음과 같이 주사위 게임 작성.

// 1) 각 플레이어가 주사위를 3번씩 던짐
// 2) 주사위 결과의 합 계산
// 3) 두 플레이어의 합을 비교하여 승자 결정

// 플레이어 한 명이 게임을 끝낸 결과를 반환하는 함수
// 매개변수 num(반복횟수)
// 리턴값: dicePl(다이스 결과를 담은 배열), diceSum(다이스 결과 합)

function diceRollGame(num) {
  const dicePl = [];

  for (let i=0; i<num; i++) {
    let dice = Math.floor(Math.random() * 6) +1;
    dicePl.push(dice)
  };

  let diceSum = dicePl.reduce(
    function (sum, roll) {
      return sum + roll;
    }
  , 0);

  return {
    dicePl: dicePl,
    diceSum: diceSum
  }
};

let pl1 = diceRollGame(3);
let pl2 = diceRollGame(3);

console.log("Player 1의 주사위 결과: [ " + pl1.dicePl + " ] 합: " + pl1.diceSum);
console.log("Player 2의 주사위 결과: [ " + pl2.dicePl + " ] 합: " + pl2.diceSum);
console.log(pl1.diceSum > pl2.diceSum ? "Player 1의 승리!" : "Player 2의 승리!")