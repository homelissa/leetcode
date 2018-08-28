/*

A string is said to be a special palindromic string if either of two conditions is met:

All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.
A special palindromic substring is any substring of a string which meets one of those criteria. Given a string, determine how many special palindromic substrings can be formed from it.

For example, given the string , we have the following special palindromic substrings: .

Function Description

Complete the substrCount function in the editor below. It should return an integer representing the number of special palindromic substrings that can be formed from the given string.

substrCount has the following parameter(s):

n: an integer, the length of string s
s: a string
Input Format

The first line contains an integer, , the length of .
The second line contains the string .

Constraints


Each character of the string is a lowercase alphabet, .

Output Format

Print a single line containing the count of total special palindromic substrings.

Sample Input 0

5
asasd
Sample Output 0

7
*/

function getSubstrings(s) {
  let subs = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let sub = s.slice(i, j + 1);
      if (sub.length > 0) {
        subs.push(sub);
      }
    }
  }

  return subs;
}

function isSpecialPalindrome(s) {
  if (s.length === 1) {
    return true;
  }

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] != s[end]) {
      return false;
    } else {
      start++
      end--
    }
  }

  return true;
}

function substrCount(n, s) {
  let subs = getSubstrings(s).filter(el => isSpecialPalindrome(el))
  return subs.length;

}
