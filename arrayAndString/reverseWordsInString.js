/*
Given an input string, reverse the string word by word.

Example:

Input: "the sky is blue",
Output: "blue is sky the".
Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
Follow up: For C programmers, try to solve it in-place in O(1) space.
*/

var reverseWords = function(str) {
  let words = str.split(" ");
  let reversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }

  return reversed.join(" ");
};


var reverseWordsInPlace = function(str) {
  str = str.split(" ");
  let front = 0;
  let back = str.length - 1;

  while (front < back) {
    swap(str, front, back)
    front++;
    back--;
  }

  return str.join(" ");
}

var swap = (arr, front, back) => {
  let temp = arr[front];
  arr[front] = arr[back];
  arr[back] = temp;
  return arr;
}
