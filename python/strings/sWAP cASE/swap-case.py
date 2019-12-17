# sWAP cASE
# https://www.hackerrank.com/challenges/swap-case/problem

def swap_case(s):
  '''
  result = ''

  for x in s:
    if (x.islower()):
      result += x.upper()
    else:
      result += x.lower()

  return result
  '''

  return s.swapcase()

