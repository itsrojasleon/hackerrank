# String Split and Join
# https://www.hackerrank.com/challenges/python-string-split-and-join/problem

def split_and_join(line):
  result = line.split(' ')
  result = '-'.join(result)
  return result

