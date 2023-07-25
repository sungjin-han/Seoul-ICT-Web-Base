// addNum라는 이름의 함수를 정의함.
function addNum(x, y) {    // x, y는 이 함수의 매개변수임.
    console.log(x + y);
}
addNum(2, 3);  


function multiNum(x, y) {
    return x * y;         // x와 y를 곱한 결과를 반환함.
}
var num = multiNum(3, 4); // multiNum() 함수가 호출된 후, 그 반환값이 변수 num에 저장됨.
console.log(num);


// 제곱의 값을 구하는 함수 sqr를 정의함.
function sqr(x) {
    return x * x;
}
var sqrNum = sqr;
sqred = sqrNum(4)
console.log(sqred)

//local variable
function localNum() {
    var num = 10; // 지역 변수 num에 숫자 10을 대입함.
    console.log("함수 내부에서 변수 num의 타입은 " + typeof num + "입니다.<br>"); // number
}
localNum();       // 함수 localNum()을 호출함.
console.log("함수의 호출이 끝난 뒤 변수 num의 타입은 " + typeof num + "입니다."); // undefined

//global variable
var num = 10; // 전역 변수 num을 선언함.
function globalNum() {
    console.log("함수 내부에서 변수 num의 값은 " + num + "입니다.<br>"); // 10
    num = 20; // 전역 변수 num의 값을 함수 내부에서 변경함.
}
globalNum();  // 함수 globalNum()을 호출함.
console.log("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 20


/*
JavaScript에서 호이스팅(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다. 
var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화합니다. 
반면 let과 const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않습니다.
*/

//1
function catName(name) {
    console.log("제 고양이의 이름은 " + name + "입니다");
  }
  
catName("호랑이");


//2
catName("클로이");
function catName(name) {
  console.log("제 고양이의 이름은 " + name + "입니다");
}
/*
결과: "제 고양이의 이름은 클로이입니다"
*/

//3
console.log(num); // 호이스팅한 var 선언으로 인해 undefined 출력
var num; // 선언
num = 6; // 초기화

//4
console.log(num); // ReferenceError
num = 6; // 초기화

//let의 시간 사각지대
function do_something() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2;
  }