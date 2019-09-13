# Print Function
# https://www.hackerrank.com/challenges/python-print/problem

from __future__ import print_function

if __name__ == '__main__':
  [print(x, end='') for x in xrange(1, int(raw_input()) + 1)]