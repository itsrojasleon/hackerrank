/*
  Breaking the Records
*/

/*
  https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
*/

function breakingRecords(scores) {
  let highestScore = 0;
  let lowestScore = 0;
  let newScores = [...new Set(scores)];
  let max = newScores[0],
    min = newScores[0];

  for (let i = 0; i < newScores.length; i++) {
    if (newScores[i] < newScores[i + 1] && newScores[i + 1] > max) {
      max = newScores[i + 1];
      highestScore++;
    }
    if (newScores[i] > newScores[i + 1] && newScores[i + 1] < min) {
      min = newScores[i + 1];
      lowestScore++;
    }
  }
  return [highestScore, lowestScore];
}
