/*
  Mini-Max Sum   
*/
/*
  https://www.hackerrank.com/challenges/mini-max-sum/problem
*/

function miniMaxSum(arr) {
  let sorted = arr.sort((a, b) => a - b);

  let first = sorted.reduce((a, b) => a + b, 0) - sorted[sorted.length - 1];
  let second = sorted.reduce((a, b) => a + b, 0) - sorted[0];
  console.log(first, second)
}
miniMaxSum([1, 2, 3, 4, 5]);

