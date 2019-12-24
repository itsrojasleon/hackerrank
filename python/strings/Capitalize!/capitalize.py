def solve(s):
  a = s.split(' ')
  result = ''

  for i in range(len(a)):
    if (a[i] != ''):
      result += a[i][0].capitalize() + a[i][1:] + ' '
    else:
      result += ' '
  
  return result.strip()
