/*
  Divisible Sum Pairs
*/
/*
  https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
*/

function divisibleSumPairs(n, k, ar) {
  let counter = 0;

  for (let i = 0; i < n; i++) {
    for (let j = n; j > 0; j--) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        counter++;
      }
    }
  }
  return counter;
}
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
