/*
  CamelCase
*/

/*
  https://www.hackerrank.com/challenges/camelcase/problem
*/

function camelcase(s) {
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}
camelcase('saveChangesInTheEditor');
