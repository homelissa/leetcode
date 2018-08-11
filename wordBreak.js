/*
Word break

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false

*/

var wordBreak = function(s, wordDict) {
    var t = [];

      for (var i = 0; i< s.length; i++) {
        for (var j = 0; j <=i; j ++ ) {
            var word = s.slice(j, i + 1);

            if (wordDict.includes(word) && (j == 0 || t[j-1] == true )) {
                t[i] = true;
            }
        }
    }

    return t[s.length - 1] || false;
};

console.log(wordBreak("tim", ["ti", "m"]));


var wordBreak = function(s, wordDict) {
  if (!wordDict || wordDict.length < 1) {
    return false;
  }

  const cache = Array(s.length + 1).fill(false);
  cache[0] = true;

  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (cache[j] && wordDict.indexOf(s.substring(j, i)) >= 0) {
        cache[i] = true;
        break;
      }
    }
  }

  return cache[s.length];
}
