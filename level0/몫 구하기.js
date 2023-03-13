// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 나의 풀이
function solution(num1, num2) {
  const answer = Math.floor(num1 / num2);
  return answer;
}

// 다른사람의 풀이
// 틸트 연산자 활용
function tilt(num1, num2) {
  const answer = ~~(num1 / num2);
  return answer;
}
