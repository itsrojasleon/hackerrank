/*
  Day 1: Functions
*/
/*
  https://www.hackerrank.com/challenges/js10-function/problem
*/

function factorial(n) {
  let result;

  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

factorial(4);
