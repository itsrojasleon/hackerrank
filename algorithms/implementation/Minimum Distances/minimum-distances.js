/*
  Minimum Distances
*/
/*
  https://www.hackerrank.com/challenges/minimum-distances/problem
*/

function minimumDistances(a) {
  let numMap = {};
  let res = [];
  let results = [];

  for (let n of a) {
    numMap[n] = numMap[n] + 1 || 1;
  }

  for (let n in numMap) {
    if (numMap[n] < 2) {
      delete numMap[n];
    }
  }

  let keys = Object.keys(numMap);

  if (keys.length >= 1) {
    for (let x of keys) {
      let z = [];
      for (let i = 0; i < a.length; i++) {
        if (Number(x) === a[i]) {
          z.push(i);
        }
      }
      res.push(z);
    }

    for (let arr of res) {
      results.push(arr.reduce((a, b) => b - a));
    }
    return Math.min(...results);
  } else {
    return -1;
  }
}
