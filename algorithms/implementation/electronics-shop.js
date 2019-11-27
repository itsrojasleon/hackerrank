/*
  Electronics Shop
*/
/*
  https://www.hackerrank.com/challenges/electronics-shop/problem
*/

function getMoneySpent(keyboards, drives, b) {
  let values = [];
  
  for (let k of keyboards) {
    for (let d of drives) {
      if (k + d <= b) {
        values.push(k + d);
      }
    }
  }

  return values.length > 1 ? Math.max(...values) : -1;
}
