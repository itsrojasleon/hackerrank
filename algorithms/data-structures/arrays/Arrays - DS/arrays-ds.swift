// Arrays - DS
// https://www.hackerrank.com/challenges/arrays-ds/problem

func reverseArray(a: [Int]) -> [Int] {
  var result: [Int] = []
  
  for idx in stride(from: a.count - 1, to: -1, by: -1) {
    result.append(a[idx])
  }
  return result
}
