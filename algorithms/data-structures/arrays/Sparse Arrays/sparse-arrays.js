// Sparse Arrays
// https://www.hackerrank.com/challenges/sparse-arrays/problem

function matchingStrings(strings, queries) {
  let result = [];

  for (let query of queries) {
    let sum = 0;
    for (let string of strings) {
      if (query === string) {
        sum += 1;
      }
    }
    result.push(sum);
  }
  return result;
}
