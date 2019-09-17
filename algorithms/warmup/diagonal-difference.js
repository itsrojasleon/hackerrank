/*
  Diagonal Difference
*/
/*
  hackerrank.com/challenges/diagonal-difference/problem
*/
function diagonalDifference(arr) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < arr.length; i++) {
    first += arr[i][i];
    second += arr[i][arr.length - i - 1];
  }

  return Math.abs(first - second);
}
diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
/*
  Diagonal Difference
*/
/*
  hackerrank.com/challenges/diagonal-difference/problem
*/
function diagonalDifference(arr) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < arr.length; i++) {
    first += arr[i][i];
    second += arr[i][arr.length - i - 1];
  }

  return Math.abs(first - second);
}
diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
