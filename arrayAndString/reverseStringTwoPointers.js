/*
Write a function that takes a string as input and returns the string reversed.
Use the two pointer technique

Example:
Given s = "hello", return "olleh".
*/

var reverseString = function(s) {
  let s = s.split("");
  let mid = Math.floor(s.length / 2);

  for (let i = 0; i <= mid; i++) {
    let temp = s[s.length - 1 - i];

    s[s.length - 1 - i] = s[i];
    s[i] = temp;
  }

  return s.join("");
}


console.log(reverseString('hello')) // => 'olleh'
