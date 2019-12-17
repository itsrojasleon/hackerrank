# Mutations
# https://www.hackerrank.com/challenges/python-mutations/problem

def mutate_string(string, position, character):
 # result = list(string)
 # result[position] = character
 # result = ''.join(result)
 # return result

 return string[:position] + character + string[position + 1:]

