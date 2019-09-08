/*
  Simple Array Sum
*/

/*
  https://www.hackerrank.com/challenges/simple-array-sum/problem
*/

function simpleArraySum(ar) {
  return ar.reduce((a, b) => a + b, 0);
}
simpleArraySum([1, 2, 3]);
