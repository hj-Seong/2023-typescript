// 타입스크립트는 자바스크립트의 변수와 함수에 타입을 설정
console.log("안녕");
// 변수를 지정할때 타입을 지정하여 원하는 자료형만 넣을수 있다
var word = "안녕";
word = "반갑습니다";
// word = 1; // 다른 자료형은 들어가지 않는다.
var num = 1;
var num1 = num; // 동일한 자료형은 할당가능
var isTrue = true;
isTrue = !isTrue; // 동일한 자료형이므로 가능
var stringArray = ["1", "2", "3"];
// 배열의요소가 동일한 자료형
// let array: string[] = ["1","2", 3]; 
console.log(stringArray.toString());
console.log("값을 추가 하였습니다");
// 함수는 매개변수와 함수의 반환값에 자료형을 정의
// return 되는 값이 없을 때는 void로 정의한다
// 매개변수의 자료형과, printWord의 자료형을 정의
function printWord(word) {
    console.log(word);
}
printWord(word);
// 인터페이스와 객체
// 자바스크립트에서 리터럴 객체 생성
var person = {
    name: "홍길동",
    age: 30,
    address: "부산"
};
// 인터페이스로 만든 속성으로 작성한 객체
var myPerson = {
    name: "green",
    age: 40,
    //Person에서 작성하지 않은 내용을 객체에 쓸수 없다
    // adress : "", 
};
console.log(myPerson.name);
// 함수안의 매개변수의 객체를 인터페이스로 타입 정함
// 매개변수의 객체의 인터페이스 타입은 함수안에서 쓰는 속성O
function printName(person) {
    console.log(person.name);
    // if문을 사용해서 age값이 있다면 console.log로 출력
}
printName(person);
// printName()을 사용해서 myPerson 출력
