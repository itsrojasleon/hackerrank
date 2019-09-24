/*
  Pangrams
*/
/*
  https://www.hackerrank.com/challenges/pangrams/problem
*/

function pangrams(s) {
  let letters = s
    .replace(/\s/g, '')
    .toLowerCase()
    .split('');
  let countDistinctLetters = letters.filter(function(x, pos) {
    return letters.indexOf(x) === pos;
  }).length;

  return countDistinctLetters === 26 ? 'pangram' : 'not pangram';
}
