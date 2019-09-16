/*
  Day 6: Bitwise Operators
*/
/*
  https://www.hackerrank.com/challenges/js10-bitwise/problem
*/

'use strict';

function getMaxLessThanK(n, k) {
  let bitAnd = 0;
  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      bitAnd = i & j;
      if (bitAnd > max && bitAnd < k) {
        max = bitAnd;
      }
    }
  }
  return max;
}

function main() {
  const q = +readLine();

  for (let i = 0; i < q; i++) {
    const [n, k] = readLine()
      .split(' ')
      .map(Number);

    console.log(getMaxLessThanK(n, k));
  }
}
