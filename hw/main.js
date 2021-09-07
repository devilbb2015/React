// 모듈
// 1. 문자열 중에 중복된 문자를 제거하는 함수
//    ex) ssac => 'ssac'
// 2. number값을 받았을 경우 홀수면 '홀수 입니다.',
//    짝수면 '짝수입니다' +2의 제곱형태

// main
// const moduleArr = [1, 2, 'apple', 'ssac', 5];


// 첫번째 방법
// function one(str) {
//   const strArr = str.split("");
//   const strSet = new Set(strArr);
//   const uniqueArr = Array.from(strSet);

//   return uniqueArr.join("");
// }


// 두번째 방법
// function one(str) {
//   const stringArr = str.split(""); // [a,p,p,l,e]
//   const uniqueArr = stringArr.filter((e, i) => {
//    return stringArr.indexOf(e) === i  // 1 === p = 2 false
//   }); // [a,p,l,e]

//   return console.log(uniqueArr.join(""));

// }

// 세번째 방법
function one(str) {
  const stringArr = str.split(""); // [a,p,p,l,e]
  const uniqueArr = [];
  stringArr.forEach((item) => {
    if(!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return console.log(uniqueArr.join(""));
}

const moduleArr = ['apple', 'ssac'];

moduleArr.forEach((item) => {
  one(item);
});


