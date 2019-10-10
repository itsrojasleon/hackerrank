/*
  Find Digits
*/
/*
  https://www.hackerrank.com/challenges/find-digits/problem
*/

function findDigits(n) {
  let result = 0;
  n.toString()
    .split('')
    .map(num => (n % Number(num) === 0 ? result++ : null));

  return result;
}
findDigits(1012);
