/*
  Day 2: Conditional Statements: If-Else
*/
/*
  https://www.hackerrank.com/challenges/js10-if-else/problem
*/

function getGrade(score) {
  let grade;

  if (score > 25 && score <= 30) {
    grade = 'A';
  } else if (score > 20 && score <= 25) {
    grade = 'B';
  } else if (score > 15 && score <= 20) {
    grade = 'C';
  } else if (score > 10 && score <= 15) {
    grade = 'D';
  } else if (score > 5 && score <= 10) {
    grade = 'E';
  } else {
    grade = 'F';
  }
  return grade;
}
