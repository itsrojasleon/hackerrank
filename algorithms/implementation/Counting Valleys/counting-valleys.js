/*
  Counting Valleys
*/
/*
  https://www.hackerrank.com/challenges/counting-valleys/problem
*/

function countingValleys(n, s) {
  let valleys = 0;
  let elevation = 0;

  for (let char of s) {
    if (char === 'U') elevation += 1;
    else elevation -= 1;

    if (!elevation && char === 'U') valleys += 1;
  }
  return valleys;
}
