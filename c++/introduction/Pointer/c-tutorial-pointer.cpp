// Pointer
// https://www.hackerrank.com/challenges/c-tutorial-pointer/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

#include <stdio.h>

void update(int *a,int *b) {
  int sum = *a + *b;
  int abs = *a - *b > 0 ? *a - *b : -(*a - *b);

  *a = sum;
  *b = abs;
}

int main() {
  int a, b;
  int *pa = &a, *pb = &b;
  
  scanf("%d %d", &a, &b);
  update(pa, pb);
  printf("%d\n%d", a, b);

  return 0;
}
