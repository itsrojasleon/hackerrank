# Lists
# https://www.hackerrank.com/challenges/python-lists/problem

result = []

if __name__ == '__main__':
    N = int(input())

for i in range(0, N):
    tokens = input().split()

    if tokens[0] == 'insert':
        result.insert(int(tokens[1]), int(tokens[2]))
    elif tokens[0] == 'print':
        print(result)
    elif tokens[0] == 'remove':
        result.remove(int(tokens[1]))
    elif tokens[0] == 'append':
        result.append(int(tokens[1]))
    elif tokens[0] == 'sort':
        result.sort()
    elif tokens[0] == 'pop':
        result.pop()
    elif tokens[0] == 'reverse':
        result.reverse()
