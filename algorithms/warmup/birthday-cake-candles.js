/*
  Birthday Cake Candles
*/
/*
  https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/

function birthdayCakeCandles(ar) {
  let max = Math.max(...ar);
  return ar.filter(num => num === max).length;
}
birthdayCakeCandles([3, 2, 1, 3]);
