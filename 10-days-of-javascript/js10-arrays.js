/*
  Day 3: Arrays
*/
/*
  https://www.hackerrank.com/challenges/js10-arrays/problem
*/

function getSecondLargest(nums) {
  let newArray = [...new Set(nums)].sort((a, b) => a - b).reverse();
  return newArray[1];
}
getSecondLargest([2, 3, 6, 6, 5]);
