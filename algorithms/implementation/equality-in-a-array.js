/*
  Equalize the Array
*/
/*
  https://www.hackerrank.com/challenges/equality-in-a-array/problem
*/

function equalizeArray(arr) {
  let charMap = {};
  let max = 0;
  let maxNum;
  let counter = 0;

  for (let num of arr) {
    charMap[num] = charMap[num] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxNum = char;
    }
  }

  for (let num of arr) {
    if (parseInt(maxNum) !== num) {
      counter++;
    }
  }
  return counter;
}
equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]);
