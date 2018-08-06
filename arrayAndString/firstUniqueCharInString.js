/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

var firstUniqChar = function(s) {
  let hashMap = {};

  for (let i = 0; i < s.length; i++) {
    let el = s[i]
    if (hashMap[el]) {
      hashMap[el][0] += 1;
    } else {
      hashMap[el] = [1, i]
    }
  }

  const uniqIndices = Object.values(hashMap).filter(tuple => tuple[0] === 1)

  if (uniqIndices.length < 1) {
      return -1;
  }

  const sortedIndices = uniqIndices.sort((a, b) => (a[1] - b[1]))
  const firstIndex = sortedIndices[0][1];
  return firstIndex;
};
