/*
  Plus Minus
*/
/*
  https://www.hackerrank.com/challenges/plus-minus/problem
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positive = arr.filter(num => num > 0).length / arr.length;
  let negative = arr.filter(num => num < 0).length / arr.length;
  let cero = arr.filter(num => num === 0).length / arr.length;

  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(cero.toFixed(6));
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
