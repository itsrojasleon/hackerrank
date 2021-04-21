// Strong Password
// https://www.hackerrank.com/challenges/strong-password/problem

package main

import "strings"

func main() {
	minimumNumber(3, "Ab1")
}

func minimumNumber(n int, password string) int {
	numbers := "0123456789"
	lowerCase := "abcdefghijklmnopqrstuvwxyz"
	upperCase := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	specialCharacters := "!@#$%^&*()-+"

	missingChars := 0

	if !strings.ContainsAny(numbers, password) {
		missingChars++
	}
	if !strings.ContainsAny(lowerCase, password) {
		missingChars++
	}
	if !strings.ContainsAny(upperCase, password) {
		missingChars++
	}
	if !strings.ContainsAny(specialCharacters, password) {
		missingChars++
	}

	if n < 6 {
		if missingChars > 0 {
			if n+missingChars >= 6 {
				return missingChars
			} else {
				return 6 - n
			}
		} else {
			return 6 - n
		}
	}

	return missingChars
}
