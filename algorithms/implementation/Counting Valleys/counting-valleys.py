# Counting Valleys
# https://www.hackerrank.com/challenges/counting-valleys/problem

def countingValleys(n, s):
  valleys = 0
  elevation = 0

  for char in s:
    if char == 'U':
      elevation += 1
    else:
      elevation -= 1
    
    if (elevation == 0 and char == 'U'):
      valleys += 1
  
  return valleys
