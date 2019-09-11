/*
  Day 4: Create a Rectangle Object
*/
/*
  https://www.hackerrank.com/challenges/js10-objects/problem
*/

function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    get perimeter() {
      return 2 * (this.length + this.width)
    },
    get area() {
      return this.length * this.width
    }
  }
}

