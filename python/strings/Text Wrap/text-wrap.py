# Text Wrap
# https://www.hackerrank.com/challenges/text-wrap/problem

def wrap(string, max_width):
  new_string = ''
  counter = 0

  for x in string:
    if (counter == max_width):
      new_string += '\n'
      counter = 0

    new_string += x
    counter += 1

  return new_string
