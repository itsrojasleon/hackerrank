// https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=false

function superReducedString(str = 'baab') {
  let s = str;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      s = s.substring(0, i - 1) + s.substring(i + 1);
      i = 0;
    }
  }

  return s.length > 0 ? str : 'Empty String';
}
