// 사용자가 입력한 D-Day를 가져오는 함수

function getDday() {
	const year = document.getElementById("year-input").value;
	const month = document.getElementById("month-input").value;
	const date = document.getElementById("date-input").value;
	const dday = `${year}-${month}-${date}`;

	return dday;
}


// 남은 시간을 계산하고 화면에 표시하는 함수

function count() {
	// 디데이 가져오기
	const dday = getDday();

	console.log("D-day:", dday)

	// 남은 시간 계산: 디데이 - 현재 시간
	const now = new Date();
	console.log(now.toLocaleString());

	// 목표 날짜 => 자정으로 (00:00:00) 설정
	const target = new Date(dday).setHours(0, 0, 0, 0);
	console.log(target.toLocaleString());

	// 남은 시간: 목표 날짜 - 현재 시간
	const remaining = (target - now) / 1000;
	console.log('남은 시간:', remaining)
}