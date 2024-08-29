// Q21. 책 객체 생성, 복사. 복사된 객체에서 출판년도 2023으로 변경.

let book = {
	title: "위대한 개츠비",
	author: "스콧 피츠제럴드",
	publishedYear: 1925
}

let bookCopy = { ...book };
bookCopy.publishedYear = 2023

console.log("원본 객체:", book)
console.log("복사된 객체:", bookCopy)
console.log("원본 객체의 출판년도: " + book.publishedYear)
console.log("복사된 객체의 출판년도: " + bookCopy.publishedYear)

// 출력은 JSON 코드를 사용할 수도 있음, 이 경우 +로 문자를 연결해도 오류가 생기지 않음
console.log("문자열 변환: " + JSON.stringify(book))


// Q22. 책 객체 생성. 완벽하게 복사. 저자의 성을 "김"으로 변경.

let book2 = {
	title: "자바 프로그래밍 입문",
	author: {
		firstName: "은종",
		lastName: "박"
	},
}

let bookCopy2 = JSON.stringify(book2);
let deepBookCopy = JSON.parse(bookCopy2);

deepBookCopy.author.lastName = "김"

console.log("원본 객체: " + JSON.stringify(book2))
console.log("복사된 객체: " + JSON.stringify(deepBookCopy))
console.log("원본 객체의 성: " + book2.author.lastName)
console.log("복사된 객체의 성: " + deepBookCopy.author.lastName)


// Q23. 객채에서 브랜드와 가격 속성을 추출하여 변수에 저장

let phone = {
	brand: "Apple",
	price: 990000,
	model: "iPhone 13"
}

let { brand, price } = phone;

console.log("객체: " + JSON.stringify(phone));
console.log("브랜드: " + brand);
console.log("가격: " + price);


// Q24. 객체에서 제목과 출시연도 속성을 추출하여 변수에 저장

let movie = {
	title: "인셉션",
	director: "크리스토퍼 놀란",
	year: 2010
}

let { title: movieTitle, year: releaseYear } = movie;

console.log("객체: " + JSON.stringify(movie));
console.log("브랜드:", movieTitle);
console.log("출시연도:", releaseYear);



// Q25. 객체를 매개변수로 받아 브랜드와 모델 속성 출력

let car = {
	brand: "Tesla",
	model: "Model S",
	color: "Red"
}

function func({ brand, model }) {
	console.log(`자동차 브랜드: ${brand}, 모델명 ${model}`)
}

console.log("객체: " + JSON.stringify(car));
func(car);


// Q26. 배열을 분해하여 모든 요소를 변수에 저장

let color = ["red", "green", "blue"];
let [c1, c2, c3] = color;

console.log("배열: " + JSON.stringify(color));
console.log("출력:", c1, c2, c3);


// Q27. 첫 번째와 네 번째 요소만을 변수에 저장

let fruit = ["사과", "바나나", "오렌지", "키위"];
let [apple, , , kiwi] = fruit;

console.log("배열: " + JSON.stringify(fruit));
console.log("출력:", apple, kiwi);


// Q28.함수에서 배열 입력, 배열의 첫 번째와 세 번째 요소 출력

function fruitFun([f1, , f3]) {
	console.log(`${f1}와 ${f3}`);
}


console.log("배열:", fruit);
fruitFun(fruit)