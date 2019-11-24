/*
  Drawing Book
*/
/*
  https://www.hackerrank.com/challenges/drawing-book/problem
*/

function pageCount(n, p) {
  let a = 0;
  let b = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) a++;
    if (i === p) break;
  }

  for (let i = n; i >= 1; i--) {
    if (i === p) break;
    if (i % 2 === 0) b++;
  }

  return a < b ? a : b;
}
