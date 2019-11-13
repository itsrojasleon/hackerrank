/*
  https://www.hackerrank.com/challenges/migratory-birds/problem
*/

/*
  https://www.hackerrank.com/challenges/migratory-birds/problem
*/

function migratoryBirds(arr) {
  let charN = {};
  let max = 0;
  let maxN;

  for (let n of arr) {
    charN[n] = charN[n] + 1 || 1;
  }

  for (let n in charN) {
    if (charN[n] > max) {
      max = charN[n];
      maxN = n;
    }
  }
  return maxN;
}
