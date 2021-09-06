// 비교연산자 ('==', '===')
const num = 1;
const str = "1";

if (num == str) {
  console.log("동치 연산자 참");
} else {
  console.log("동치 연산자 거짓");
}

if (num === str) {
  console.log("일치 연산자 참");
} else {
  console.log("일치 연산자 거짓");
}

// Block Scope
let main = 1;

function func() {
  let main2 = "1";
  console.log(main2);
  console.log(main);
}

func();

// console.log(main2);

let val = 1;
if (true) {
  let val = 2;
  console.log(val);
}

console.log(val);


function funcScope() {
  let v1 = 0;
  if (true) {
    let v2 = 0;
    for (let v3 = 0; v3 < 5; v3++) {
      console.log(`v3 = ${v3}`);
    }
    console.log(`v2 = ${v2}`);
  }
}

funcScope();
// console.log(`v1 = ${v1}`);

// ` `  백틱의 활용

const name = "유승범";

// 나는야 유승범 입니다.
console.log("나는야 " + name + " 입니다.");

console.log(`나는야 ${name} 입니다.`)

// 콜백함수
function run() {
  console.log("3초 지나고 실행");
}

console.log("시작");
setTimeout(run, 3000);  // setTimeout(콜백함수, 밀리초) : 특정 밀리초 이후에 실행하는 함수
console.log("끝");

// 동기와 비동기
function func1() {
  console.log("첫번째 펑션!");
  func2();
}

function func2() {
  setTimeout(function  () {
    console.log("두전째 펑션!");
  })
  func3();
}

function func3() {
  console.log("세번째 펑션!");
}

func1();