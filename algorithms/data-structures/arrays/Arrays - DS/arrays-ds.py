# Arrays - DS
# https://www.hackerrank.com/challenges/arrays-ds/problem

# def reverseArray(a):
#   return reversed(a)

# def reverseArray(a):
#   return a[::-1]

def reverseArray(a):
  result = []
    
  for n in range(len(a) - 1, -1, -1):
    result.append(a[n])

  return result