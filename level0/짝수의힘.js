// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을
// 내풀이
const even = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) answer += i;
  }
  return answer;
};

even(10);

// 다른사람의 풀이
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
