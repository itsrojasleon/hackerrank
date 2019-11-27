/*
  Utopian Tree
*/

/*
  https://www.hackerrank.com/challenges/utopian-tree/problem
*/

function utopianTree(n) {
  let result = 1;

  for (let i = 0; i <= n; i++) {
    if (i !== 0) {
      if (i % 2 === 0) result += 1;
      else result *= 2;
    }
  }
  return result;
}
