/*
  A Very Big Sum
*/
/*
  https://www.hackerrank.com/challenges/a-very-big-sum/problem
*/

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b, 0);
}
aVeryBigSum([1, 2, 3]);
