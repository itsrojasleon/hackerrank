/*
  Day 1: Arithmetic Operators
*/

/*
  https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem
*/

function getArea(length, width) {
  let area = length * width;
  return area;
}

function getPerimeter(length, width) {
  let perimeter = (length + width) * 2;
  return perimeter;
}

getArea(10, 2);
getPerimeter(10, 2);
