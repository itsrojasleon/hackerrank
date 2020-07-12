// Functions
// https://www.hackerrank.com/challenges/c-tutorial-functions/problem?h_r=next-challenge&h_v=zen

#include <iostream>
#include <cstdio>
using namespace std;

int max_of_four(int a, int b, int c, int d) {
  int result;
  if (a > b && a > c && a > d ) {
    result = a;
  } else if (b > a && b > c && b > d) {
    result = b;
  } else if (c > a && c > b && c > d) {
    result = c;
  } else if (d > a && d > b && d > c) {
    result = d;
  }

  return result;
}
