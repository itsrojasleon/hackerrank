/*
  Cats and a Mouse
*/

/*
  https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
*/

/*
  Complete the catAndMouse function in the editor below. It should return one of the three strings as described.

  catAndMouse has the following parameter(s):

  x: an integer, Cat 's position
  y: an integer, Cat 's position
  z: an integer, Mouse 's position
*/

function catAndMouse(x, y, z) {
  let first = Math.abs(x - z);
  let second = Math.abs(y - z);

  if (first === second) return 'Mouse C';
  else if (first < second) return 'Cat A';
  else return 'Cat B';
}
catAndMouse(2, 5, 4);
