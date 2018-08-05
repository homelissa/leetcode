/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
   const sortedStrs = strs.sort((a, b) => a.length - b.length);
   var shortestString = sortedStrs[0];

   for (let i = shortestString.length; i >= 0; i--) {
     let sub = shortestString.substr(0, i);

     if (strs.every((str, i) => stringIncludesSubstring(str, sub))) {
       return sub;
     }

   }

   return -1;
 };

 var stringIncludesSubstring = (str, substr) => {
   return str.indexOf(substr) > -1;
 }
