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
 var getShortestString = function(strs) {
   const sortedStrs = strs.sort((a, b) => a.length - b.length); 
   return sortedStrs[0];
 }

 var isPrefix = function(str, sub) {
   return str.indexOf(sub) === 0;
 }

 var longestCommonPrefix = function(strs) {
   if (strs.length < 1) {
       return "";
   }

   const shortestStr = getShortestString(strs);

   for (let i = shortestStr.length; i >= 0; i--) {
     let sub = shortestStr.slice(0, i);

     if (strs.every((str, i) => isPrefix(str, sub))) {
       return sub;
     }
   }

   return "";
 };
