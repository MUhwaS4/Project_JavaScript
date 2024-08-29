// async/await: 비동기함수에서 API를 호출이 완료될 때까지 기다리는 방법
// 바깥에서 async를 선언하고 내부 함수에 await를 작성해야 함

// await을 쓰는 함수 앞에는 반드시 async를 붙여야 함
async function func1() {

  // await: 응답이 올 때까지 대기
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // GET 생략

  // 응답 메시지에 담긴 결과 데이터를 json 객체로 반환
  const resJson = await response.json();

  console.log(resJson); //  변환된 데이터 출력
}

func1();