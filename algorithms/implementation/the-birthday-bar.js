/*
  Birthday Chocolate
*/

/*
  https://www.hackerrank.com/challenges/the-birthday-bar/problem
*/

function birthday(s, d, m) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let total = 0;

    for (let j = i; j < i + m; j++) {
      total += s[j];
    }

    if (total === d) {
      result += 1;
    }
  }
  return result;
}

birthday([2, 2, 1, 3, 2], 4, 2);
