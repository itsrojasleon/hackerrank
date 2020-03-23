# Sparse Arrays
# https://www.hackerrank.com/challenges/sparse-arrays/problem


def matchingStrings(strings, queries):
  result = []

  for query in queries:
    sum = 0
    for string in strings:
      if (query == string):
        sum += 1
    result.append(sum)
    
  return result
