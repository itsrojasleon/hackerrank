/*
  Mars Exploration
*/
/*
  https://www.hackerrank.com/challenges/mars-exploration/problem
*/

function marsExploration(s) {
  let sos = 'SOSS';
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== sos[i % 3]) {
      counter++;
    }
  }
  return counter;
}
marsExploration(
  'SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS'
);
