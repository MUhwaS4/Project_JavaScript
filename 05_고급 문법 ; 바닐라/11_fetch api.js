// fetch: 서버와 데이터를 주고받기 위한 API 호출 함수

// 인자: 서버주소(URL), HTTP 메소드, 전송할 데이터 등
// GET 방식은 생략 가능

// fetch 함수는 자체적으로 promise 객체를 생성하여 반환하기 때문에 뒤에 then 또는 catch 함수를 이어서 사용할 수 있다.

fetch("http://192.168.0.67:8080/board/read?no=1") // fetch를 통해 이 위치에 promise 값이 남음. 그걸 두고 then 연결 가능.
.then((response) => response.json()) // 응답 데이터를 JSON으로 파싱 후 객체로 변환
.then((json) => console.log(json)); // 변환한 데이터 출력

// POST - 새로운 게시물 생성
fetch("http://192.168.0.67:8080/board/register", {
  method: "POST",
  body: JSON.stringify( // 전송할 데이터
    {
      title: "가입인사",
      content: "안녕하세요~!",
      writer: "user"
    }
  )
  // JSON.stringify()을 사용하면 인자에 있는 내용이 JSON 형태로 변경되고, 이 데이터를 전송할 것
  
  , 
  headers: { // 전송할 데이터의 타입과 인코딩 체계
    "content-type": "application/json; charset=Utf-8"
  } 
})
.then( (response) => response.text() ) // 응답이 단순한 텍스트일 때
.then( (text) => console.log(text) );

// 출력되는 문구: 게시글 No


// PUT - 본인이 작성한 게시물 수정
fetch("http://192.168.0.67:8080/board/modify", {
  method: "PUT",
  body: JSON.stringify( // 전송할 데이터
    {
      no: 22, // 수정하고 싶은 게시글의 번호
      title: "글자",
      content: "가나다라마바사",
      writer: "Mu"
    }
  )
  // JSON.stringify()을 사용하면 인자에 있는 내용이 JSON 형태로 변경되고, 이 데이터를 전송할 것
  
  , 
  headers: { // 전송할 데이터의 타입과 인코딩 체계
    "content-type": "application/json; charset=Utf-8"
  }
})
.then( (response) => console.log(response.status) );

// 출력되는 문구: 상태코드


// DELETE - 본인의 게시물 삭제
fetch("http://192.168.0.67:8080/board/remove?no=22", { 
  // 주소의 no는 게시글 번호
  method: "DELETE"
})
.then( (response) => console.log(response.status) );

// 출력되는 문구: 상태코드