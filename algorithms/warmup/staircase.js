/*
  Staircase
*/
/*
  https://www.hackerrank.com/challenges/staircase/problem
*/

function staircase(n) {
  for (let i = n; i > 0; i--) {
    let stair = '';
    for (let j = 1; j <= n; j++) {
      if (j >= i) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}
staircase(6);
