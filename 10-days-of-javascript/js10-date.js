/*
  Day 6: JavaScript Dates
*/
/*
  https://www.hackerrank.com/challenges/js10-date/problem
*/

function getDayName(dateString) {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return days[new Date(dateString).getDay()];
}
