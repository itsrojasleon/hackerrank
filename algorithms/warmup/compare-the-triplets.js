/*
  Compare the Triplets
*/
/*
  https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] < b[i]) {
      bob++;
    }
    if (a[i] > b[i]) {
      alice++;
    }
  }
  return [alice, bob];
}
compareTriplets([17, 28, 30], [99, 16, 8]);
