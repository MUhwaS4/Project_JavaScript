// 클릭 이벤트는 로딩 오류가 걸리므로 웬만하면 html on 이벤트로 작성
// 이벤트리스너의 경우 이벤트로 "DOMContentLoaded" 필요

// 스토리지에 리스트 총 개수 저장

localStorage.getItem("totalTodo", total = 0);

// 총 수량 확인
function numCk() {
	let finish = 0; // 완료한 리스트 개수

	let check = document.querySelectorAll("input[name='ck']");

	check.forEach(function (checkbox) {
			if (checkbox.checked) {
					finish++;
			}
	});

	// 모든 체크박스 상태를 업데이트
	check.forEach(function (checkbox) {
			finishCk(checkbox);
	});

	document.getElementById("total_num").textContent = total;
	document.getElementById("finish_num").textContent = finish;
}

// 할 일 추가
function listAdd(totalTodo) {
	let textBox = document.getElementById("todo_box").value;

	let todoL = document.querySelector(".todo_list");

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

	todoL.insertAdjacentHTML("beforeend", text);
	saveList();
	
	if (totalTodo === undefined) {
		total++;
		localStorage.setItem("totalTodo", total);
	} else {
		total = totalTodo
	}

	numCk(); // 전체 체크박스 상태를 갱신
}

// 체크박스
function finishCk(checkbox) {
	let row = checkbox.closest("tr");
	let input = row.querySelector(".todo_text");
	let btn1 = row.querySelector(".edit_text");
	let btn2 = row.querySelector(".remove_text");

	if (checkbox.checked) {
			input.classList.add("text_deco_x");
			btn1.classList.add("text_deco_x");
			btn2.classList.add("text_deco_x");
	} else {
			input.classList.remove("text_deco_x");
			btn1.classList.remove("text_deco_x");
			btn2.classList.remove("text_deco_x");
	}
}

// 수정
function editBtn(btn) {
	let row = btn.closest("tr");
	let input = row.querySelector(".todo_text");

	let text = btn.target;
	
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
	let row1 = btn.closest("tr");  // 클릭한 버튼이 속한 행
	let row2 = row1.nextElementSibling;  // 다음 형제 행

	// row2가 존재하고, row2가 <tr> 태그인 경우에만 삭제
	if (row2 && row2.tagName === 'TR') {
		row1.remove();
		row2.remove();
	} else {
		// 다음 형제 행이 존재하지 않거나 <tr> 태그가 아닌 경우
		row1.remove();
	}
	total--;
	localStorage.setItem("totalTodo", total);
	numCk();

	saveList();
}

// 전체 삭제
function removeFull() {
	let list = document.querySelectorAll(".todo_list > tr");

	list.forEach (function(todo) {
		todo.remove();
	})
	total = 0;
	localStorage.setItem("totalTodo", total);
	numCk();

	localStorage.removeItem("todoList");
}

// 스토리지 저장 
function saveList() {
	const todoListText = document.querySelectorAll(".todo_list > tr.list_info");
	let todos = [];

	todoListText.forEach(
		function (item) {
			let checkbox = item.querySelector("input[name='ck']").checked;
			let text = item.querySelector(".todo_text").value;
			todos.push({text, checked: checkbox});
		}
	);

	localStorage.setItem("todoList", JSON.stringify(todos));	
}

// 스토리지 로드
function loadList() {
	let todos = JSON.parse(localStorage.getItem("todoList") || []);
	let todoL = document.querySelector(".todo_list");

	todoL.checked

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
		
		todoL.insertAdjacentHTML("beforeend", text);
	});

	total = todos.length;
	numCk();
}

document.addEventListener("DOMContentLoaded", loadList);