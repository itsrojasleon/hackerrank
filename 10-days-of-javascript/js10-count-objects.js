/*
  Day 4: Count Objects
*/
/*
  https://www.hackerrank.com/challenges/js10-count-objects/problem
*/

function getCount(objects) {
  /*
  let count = 0;
  for (let obj of objects) {
    if (obj.x === obj.y) {
      count++;
    }
  }
  return count;
  */

  return objects.filter((obj) => obj.x === obj.y).length;
}

