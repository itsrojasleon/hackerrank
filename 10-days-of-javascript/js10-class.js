/*
  Day 4: Classes
*/
/*
  https://www.hackerrank.com/challenges/js10-class/problem
*/

class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  perimeter() {
    return this.arr.reduce((a, b) => a + b, 0);
  }
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());
