/*
  Day 2: Conditional Statements: Switch
*/
/*
  https://www.hackerrank.com/challenges/js10-switch/problem
*/
function getLetter(s) {
  let letter;

  switch (s.charAt(0)) {
    case 'a' || 'e' || 'i' || 'o' || 'u':
      letter = 'A';
      break;
    case 'b' || 'c' || 'd' || 'f' || 'g':
      letter = 'B';
      break;
    case 'h' || 'j' || 'k' || 'l' || 'm':
      letter = 'C';
      break;
    case 'n' ||
      'p' ||
      'q' ||
      'r' ||
      's' ||
      't' ||
      'w' ||
      'v' ||
      'x' ||
      'y' ||
      'z':
      letter = 'D';
  }
  return letter;
}
getLetter('adfgt');
