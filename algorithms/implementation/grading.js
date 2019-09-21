/*
  Grading Students
*/
/*
  https://www.hackerrank.com/challenges/grading/problem
*/

function gradingStudents(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      result.push(grades[i]);
    } else {
      if ((grades[i] + 2) % 5 === 0) {
        result.push(grades[i] + 2);
      } else if ((grades[i] + 1) % 5 === 0) {
        result.push(grades[i] + 1);
      } else {
        result.push(grades[i]);
      }
    }
  }
  return result;
}
gradingStudents([73, 67, 38, 33, 84]);
