/*
  Kangaroo
*/

/*
  https://www.hackerrank.com/challenges/kangaroo/problem
*/

function kangaroo(x1, v1, x2, v2) {
  /*
  if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
  */
  // Fancy way
  return v1 > v2 && (x2 - x1) % (v1 - v2) === 0 ? 'YES' : 'NO';
}
