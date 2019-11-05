/*
  Between Two Sets
*/

/*
  https://www.hackerrank.com/challenges/between-two-sets/problem
*/

function getTotalX(a, b) {
  let counter = 0;

  for (let x = 1; x <= 100; x++) {
    if (a.every(int => x % int == 0)) {
      if (b.every(int => int % x == 0)) {
        counter++;
      }
    }
  }

  return counter;
}
getTotalX([2, 6], [24, 36]); // === 2
