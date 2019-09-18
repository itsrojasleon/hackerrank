/*
  Time Conversion
*/
/*
  https://www.hackerrank.com/challenges/time-conversion/problem
*/

function timeConversion(s) {
  const a = s.substring(8);
  let hours = parseInt(s.substring(0, 2));
  let minutes = s.substring(3, 5);
  let seconds = s.substring(6, 8);

  if (a === 'PM') {
    if (hours === 12) {
      hours -= 12;
    }
    hours += 12;
  } else {
    if (hours === 12) {
      hours -= 12;
    }
  }
  return `${hours > 9 ? hours : '0' + hours}:${minutes}:${seconds}`;
}

timeConversion('12:40:22AM'); // 00:40:22
