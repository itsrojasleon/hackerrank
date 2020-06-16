// Arrays - DS
// https://www.hackerrank.com/challenges/arrays-ds/problem

// function reverseArray(a: number[]): number[] {
//   return a.reverse();
// }

function reverseArray(a: number[]): number[] {
  let result = [];

  for (let i = a.length - 1; i >= 0; i -= 1) {
    result.push(a[i]);
  }
  return result;
}
