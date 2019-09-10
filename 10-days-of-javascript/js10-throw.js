/*
  Day 3: Throw
*/
/*
  https://www.hackerrank.com/challenges/js10-throw/problem
*/

function isPositive(a) {
  if (a > 0) {
    throw new Error('YES');
  } else if (a === 0) {
    throw new Error('Zero Error');
  } else {
    throw new Error('Negative Error');
  }
}
isPositive(4);
