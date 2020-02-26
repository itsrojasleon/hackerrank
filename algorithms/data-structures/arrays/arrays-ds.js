// Arrays - DS
// https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a) {
  /*
  let reversed = '';
  for (let char of a) {
    reversed = char + ' ' + reversed;
  }
  return reversed;
  */
  // return a.reduce((prev, curr) => curr + ' ' + prev, '');
  return a.reverse().join(' ');
}
