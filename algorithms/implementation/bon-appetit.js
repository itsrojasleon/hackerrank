/*
  Bon Appétit
*/
/*
  https://www.hackerrank.com/challenges/bon-appetit/problem
*/

function bonAppetit(bill, k, b) {
  let sum = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      sum += bill[i] / 2;
    }
  }

  if (sum === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - sum);
  }
}
