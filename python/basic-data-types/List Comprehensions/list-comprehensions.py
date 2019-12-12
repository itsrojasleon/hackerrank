# List Comprehensions
# https://www.hackerrank.com/challenges/list-comprehensions/problem

if __name__ == '__main__':
  x = int(input())
  y = int(input())
  z = int(input())
  n = int(input())

# Solution

arr = [
  [X, Y, Z] 
  for X in range(x + 1) 
  for Y in range(y + 1) 
  for Z in range(z + 1) 
  if X + Y + Z != n
]
print(arr)