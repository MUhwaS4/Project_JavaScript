// 타이머 실행시 생성되는 Interval ID를 저장할 배열
let intervalIdArr = [];

// 스토리지에 저장된 디데이 꺼내기
let savedDate = localStorage.getItem("saved-date");


// 브라우저가 처음 로드될 때, 저장된 날짜가 있다면 바로 타이머 시작
if (savedDate != null) {
	console.log(savedDate);
	// 이전에 설정된 디데이를 전달하여 타이머 시작
	start(savedDate);
} else {
	console.log("저장된 날짜가 없습니다….")
}

// 사용자가 입력한 D-Day를 가져오는 함수

function getDday() {
	const year = document.getElementById("year-input").value;
	const month = document.getElementById("month-input").value;
	const date = document.getElementById("date-input").value;
	const dday = `${year}-${month}-${date}`;

	return dday;
}


// 남은 시간을 계산하고 화면에 표시하는 함수

function count(dday) {
	// 디데이 가져오기
	// const dday = getDday();

	console.log("D-day:", dday)

	// 남은 시간 계산: 디데이 - 현재 시간
	const now = new Date();
	// console.log(now.toLocaleString());

	// 목표 날짜 => 자정으로 (00:00:00) 설정
	const target = new Date(dday).setHours(0, 0, 0, 0);
	// console.log(target.toLocaleString());

	// 남은 시간: 목표 날짜 - 현재 시간
	const remaining = (target - now) / 1000;
	// console.log('남은 시간:', remaining)

	// 사용자가 잘못된 날짜를 입력했으면 함수를 강제로 종료
	// 디데이가 현재 날짜보다 빠른 경우 or 올바른 날짜가 아닌 경우
	if (remaining <= 0 || isNaN(remaining)) {
		console.log("잘못된 날짜가 들어왔습니다….");
		return;
	}

	// 남은 시간을 (일, 시간, 분, 초)로 계산하기
	const remainObj = {
		date: Math.floor(remaining / 3600 / 24),
		hour: Math.floor(remaining / 3600) % 24,
		min: Math.floor(remaining / 60) % 60,
		sec: Math.floor(remaining) % 60,
	}

	// console.log(remainObj)

	// 남은 시간을 화면에 표시
	document.getElementById("day").textContent = remainObj.date;
	document.getElementById("time").textContent = remainObj.hour;
	document.getElementById("min").textContent = remainObj.min;
	document.getElementById("sec").textContent = remainObj.sec;

}


// 타이머 시작 함수

// 함수 호출 시 전달받은 인자에 따라 분기문으로 처리

// 전달받은 인자가 있다면?
// ㄴ 브라우저 로드 시 타이머가 실행된 것

// 전달받은 인자가 없다면?
// ㄴ 사용자가 새로운 D-Day를 입력한 후 실행된 것

function start(prevDate) {

	// 우선 dday는 빈값으로 선언 (if에 따라 값 변경)
	let dday = null;

	// 사용자가 디데이를 입력하고 시작 버튼 클릭
	if (prevDate === undefined) {
		// 사용자가 입력한 디데이 가져오기
		dday = getDday();
		// 새로운 디데이를 로컬 스토리지에 설정
		localStorage.setItem("saved-date", dday);
	} else {
		// 브라우저 로드 후 이전에 저장한 날짜 사용
		dday = prevDate;
	}

	// 반복문으로 남은 시간 변경하기
	// for (let i=0; i<10; i++) {
	// 	count();
	// }

	// setInterval (반복적으로 처리할 함수, 반복주기);
	// 1초 간격으로 타이머 설정
	// 타이머 id 반환
	const intervalId = setInterval (()=>{
		count(dday);
	}, 1000)

	// console.log('타이머 아이디', intervalId);

	// 생성된 타이머 아이디를 배열에 추가
	intervalIdArr.push(intervalId);

}


// 타이머 중지 함수

function stop() {
	// 모든 타이머 중지
	for (let i=0; i < intervalIdArr.length; i++) {
		// 타이머를 종료하는 함수
		let id = intervalIdArr[i];
		clearInterval(id);
	}
}

// 타이머 초기화 함수

function reset() {
	// 모든 타이머 삭제
	stop();

	// 남은 시간을 0으로 초기화
	document.getElementById("day").textContent = 0;
	document.getElementById("time").textContent = 0;
	document.getElementById("min").textContent = 0;
	document.getElementById("sec").textContent = 0;

	// 스토리지에서 날짜 삭제
	localStorage.removeItem('saved-date')
}