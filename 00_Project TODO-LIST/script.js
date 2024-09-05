// 클릭 이벤트는 로딩 오류가 걸리므로 웬만하면 html on 이벤트로 작성
// 이벤트리스너의 경우 이벤트로 "DOMContentLoaded" 필요

// 스토리지에 리스트 총 개수 저장
// 로컬 스토리지에 totalTodo Key가 없을 경우 0으로 지정 (디폴트 파라미터)
localStorage.getItem("totalTodo", total = 0);

// 총 수량 확인
function numCk() {
	let finish = 0; // 완료한 리스트 개수 

	// name이 ck인 체크박스를 모두 확인해서 배열로 정리
	let check = document.querySelectorAll("input[name='ck']");

	// 해당 배열을 forEach 함수로 순회
	// if (항목.checked)는 type="checkbox"가 체크된 것만 확인
	// if문 안으로 들어갔을 경우 완료한 리스트 개수 증가
	check.forEach(function (checkbox) {
			if (checkbox.checked) {
					finish++;
			}
	});

	// 모든 체크박스 상태를 업데이트
	// finishCk(checkbox) 함수는 박스가 체크되면 해당 라인에 취소선을 긋도록 설정함 (클래스 추가)
	// 그리고 finishCk() 내부에서 saveList() 함수를 진행함 = 스토리지에 해당 내역을 저장하도록 설정
	// saveList() 함수가 없으면 새로고침 했을 때 체크박스가 유지되지 않음
	check.forEach(function (checkbox) {
			finishCk(checkbox);
	});

	// 이후 총 리스트 수와 완료된 리스트 수를 업데이트함
	// 항목.textContent는 해당 라인에서 텍스트로 분류할 수 있는 항목만 분류
	// 현재 html 코드에 0이라고 설정되어 있는 숫자를 total, finish 변수로 업데이트
	document.getElementById("total_num").textContent = total;
	document.getElementById("finish_num").textContent = finish;
}

// 할 일 추가
function listAdd(totalTodo) {
	// 할 일을 작성하는 input=[type="text"]를 호출
	// value에 text 내용이 작성되므로 value로 호출할 것
	let textBox = document.getElementById("todo_box").value;

	// 할 일 목록을 추가할 .todo_list class를 찾아서 호출
	let todoL = document.querySelector(".todo_list");

	// 추가할 html 코드 작성
	// 기본적인 할일 목록 [체크박스/할 일/수정 버튼/추가버튼]과 밑줄 [hr] 작성
	// hr는 td colsapn="4"로 설정하면 td 4개만큼의 크기로 설정됨 (형제 클래스의 td와 동일한 크기)
	// [할 일]의 경우 textBox에 쓰인 값과 동일하므로 변수 처리
	let text = `
		<tr class="list_info list_tr">
			<td><input type="checkbox" name="ck" class="ck_box" onclick="numCk()"></td>
			<td><input type="text" name="list" class="todo_text th_h" value="${textBox}" disabled></td>
			<td><button type="button" class="th_h edit_text" onclick="editBtn(this)">수정</button></td>
			<td><button type="button" class="th_h remove_text" onclick="removeBtn(this)">삭제</button></td>
		</tr>
		<tr class="list_tr">
			<td colspan="4"><hr></td>
		</tr>`;

	// 이후 호출한 todoL 중 "beforeend" 자식 중 가장 마지막에 코드 추가
	// saveList() 함수를 호출해서 로컬 스토리지에 저장
	todoL.insertAdjacentHTML("beforeend", text);
	saveList();
	
	// 로컬 스토리지엔 totalTodo key가 있고, 만약 해당 스토리지 항목이 없다면
	// total 값을 증가한 뒤 그 값을 localStorage에 저장
	// 그렇지 않다면 total 값은 totalTodo와 동일한 값이 됨
	if (totalTodo === undefined) {
		total++;
		localStorage.setItem("totalTodo", total);
	} else {
		total = totalTodo
	}

	// 이후 역할을 모두 끝낸 텍스트 입력박스는 ""으로 리셋
	document.getElementById("todo_box").value = "";

	numCk(); // 전체 체크박스 상태를 갱신
}

// 체크박스
function finishCk(checkbox) { // checkbox는 html 코드 내에서 this로 지정되어 있음
	// 체크박스를 누르면 체크될 목록을 모두 호출
	// 항목.closest의 경우 자신을 포함해서 가장 가까운 선택자를 [위]에서 찾음 (부모를 포함한 상위 항목 검색)
	let row = checkbox.closest("tr");

	// 이후 text 박스와 버튼 2개 확인
	let input = row.querySelector(".todo_text");
	let btn1 = row.querySelector(".edit_text");
	let btn2 = row.querySelector(".remove_text");

	// checkbox가 체크됐을 경우 취소선 css class 추가
	// 그렇지 않을 경우 클래스 삭제
	// 이후 관련 내용 saveList()로 로컬 스토리지에 저장
	if (checkbox.checked) {
			input.classList.add("text_deco_x");
			btn1.classList.add("text_deco_x");
			btn2.classList.add("text_deco_x");
	} else {
			input.classList.remove("text_deco_x");
			btn1.classList.remove("text_deco_x");
			btn2.classList.remove("text_deco_x");
	}
	saveList()
}

// 수정
function editBtn(btn) { // btn은 html 코드 내에서 this로 지정되어 있음
	// 마찬가지로 .closest로 가장 가까운 tr을 찾음
	// 그 중 수정해야 할 todo_text는 따로 호출
	let row = btn.closest("tr");
	let input = row.querySelector(".todo_text");
	
	// disabled = 해당 항목을 수정하지 못하게 하는 html 속성
	// 해당 속성이 있을 경우 if문 안으로 들어가서 속성을 지우고(수정 가능하게끔), 버튼을 [완료]로 변경함
	// 수정 가능 여부를 쉽게 파악할 수 있게끔 css 코드 추가
	if (input.disabled) {
		// disabled 속성이 true일 때, false로 설정하여 수정 가능하도록 함
		input.disabled = false;
		btn.textContent = "완료"; // 버튼 텍스트를 "완료"로 변경 (수정 완료 시)
		input.classList.add("bac_co");
	} else {
		// disabled 속성이 false일 때, true로 설정하여 수정 불가능하도록 함
		input.disabled = true;
		btn.textContent = "수정"; // 버튼 텍스트를 "수정"으로 변경 (수정 모드로 돌아감)
		input.classList.remove("bac_co");
	}
}

// 삭제
function removeBtn(btn) {
	// 가장 가까운 tr 행 확인
	let row1 = btn.closest("tr");
	// nextElementSibling의 경우, 가장 가까운 형제 행을 서치함
	// row2의 경우 가장 가까운 tr행(라인)을 호출
	let row2 = row1.nextElementSibling;

	// row2가 존재하고, row2가 <tr> 태그인 경우에만 삭제
	if (row2 && row2.tagName === 'TR') {
		row1.remove();
		row2.remove();
	} else {
		// 다음 형제 행이 존재하지 않거나 <tr> 태그가 아닌 경우
		row1.remove();
	}

	// 항목을 삭제할 때마다 total값 감소
	total--;

	// 수량 체크 함수 호출
	numCk();

	// 스토리지 저장 함수 호출
	saveList();
}

// 전체 삭제
function removeFull() {
	// 리스트에 들어있는 tr 항목을 모두 호출해서 배열로 정리
	let list = document.querySelectorAll(".todo_list > tr");

	// forEach 함수 순회하며 전부 삭제
	list.forEach (function(todo) {
		todo.remove();
	})

	// total 값 0으로 리셋
	// 로컬 스토리지 값 마찬가지 리셋
	// numCk 함수 호출해서 전체 리셋
	total = 0;
	localStorage.setItem("totalTodo", total);
	numCk();

	// 이후 로컬 스토리지 내부에 저장된 값도 전부 삭제
	localStorage.removeItem("todoList");
}

// 스토리지 저장 
function saveList() {
	// todo_list 중 항목이 정리될 list_info을 서치
	// 스토리지에 추가할 배열을 선언
	const todoListText = document.querySelectorAll(".todo_list > tr.list_info");
	let todos = [];

	// 항목을 순회하며 [체크박스 여부]와 [할 일]을 체크
	// 해당 항목을 todos 배열에 저장
	todoListText.forEach(
		function (item) {
			let checkbox = item.querySelector("input[name='ck']").checked;
			let text = item.querySelector(".todo_text").value;
			todos.push({text, checked: checkbox});
		}
	);

	// 저장된 항목을 로컬스토리지에 저장
	// 배열을 JSON 항목으로 변경한 후 저장
	localStorage.setItem("todoList", JSON.stringify(todos));	
}

// 스토리지 로드
function loadList() {
	// 스토리지에 저장된 JSON 항목을 호출
	// 그냥 부르면 인식이 안 되므로 JSON.parse명령어로 호출
	// || []는 항목이 비어있을 경우 내용을 []로 선언한다는 뜻 (디폴트 파라미터와 같은 의미)
	let todos = JSON.parse(localStorage.getItem("todoList") || []);

	// todo_list 목록도 로드
	let todoL = document.querySelector(".todo_list");

	// 스토리지에 저장된 항목을 순회하면서 텍스트 추가
	// 대부분 항목 추가에 있는 것과 같은 내용이지만 [체크박스]와 [할 일]은 변수로 처리
	// 체크박스는 내부에 true로 저장되어있을 경우 checked 삽입(체크됨), false일 경우 ''로 처리(체크 안 됨)
	todos.forEach (function (todo) {
		let text = `
		<tr class="list_info list_tr">
			<td><input type="checkbox" name="ck" class="ck_box" onclick="numCk()" ${todo.checked ? 'checked' : ''}></td>
			<td><input type="text" name="list" class="todo_text th_h" value="${todo.text}" disabled></td>
			<td><button type="button" class="th_h edit_text" onclick="editBtn(this)">수정</button></td>
			<td><button type="button" class="th_h remove_text" onclick="removeBtn(this)">삭제</button></td>
		</tr>
		<tr>
			<td colspan="4"><hr></td>
		</tr>`;
		
		// for 함수 바깥으로 나가기 전에 리스트 하단에 내용 추가
		todoL.insertAdjacentHTML("beforeend", text);
	});

	// total 값은 todos 리스트 값과 동일하게 적용
	total = todos.length;
	numCk(); // 숫자 확인용 함수
}

// 코드가 모두 로드되면 loadList() 함수 호출
document.addEventListener("DOMContentLoaded", loadList);