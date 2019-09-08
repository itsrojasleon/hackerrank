/*
  Day 0: Data Types
*/
/*
  https://www.hackerrank.com/challenges/js10-data-types/problem?h_r=next-challenge&h_v=zen
*/

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = 'HackerRank ';

  console.log(firstInteger + parseInt(secondInteger));
  console.log(firstDecimal + parseFloat(secondDecimal));
  console.log(firstString + secondString);
}

performOperation(
  '12',
  '4.32',
  'is the best place to learn and practice coding!'
);
