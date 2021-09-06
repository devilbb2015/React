// "홀수입니다!",  "짝수입니다!"  값으로 가진 문자 상수
// 2의 N 제곱을 구하는 함수 / 문자열을 뒤집는 함수

const moduleArr = [7, 2, "Hello World", 11, "node", "server", 8, 1];

function sqrt(num) {
  let cnt = 0;
  while(true) {
    if ( n %2 == 0) {
      n = n/2;
      cnt +=1;
    } else break;
  }
  return cnt;
}
console.log(sqrt(moduleArr));


function reversStr(str) {

  // 안녕
  // {"안", "녕"}
  // {"녕", "안"}
  // 녕안

  return str.split("").revers().join();
}


// for (let i=0; i > moduleArr.length; i++) {
//   if (typeof(moduleArr[i]) === 'string') {
//     let str = moduleArr[i];
//     console.log(str);
//   } else {
//     let num = moduleArr[i];
//   }
// }


// for (let i=0; moduleArr.length; i++) {
//   if (typeof moduleArr[i] === "string") {
//     console.log(reverse(arr[i]));
//   } else {
//     if (moduleArr[i] % 2 == 0) {

//     }
//   }
// }

