var findDifference = (nums1, nums2) => {
  let smallest = null;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
       curr = Math.abs(nums1[i] - nums2[j]);

      if (smallest === null || curr < smallest) {
        smallest = curr;
      }
    }
  }

  return smallest;
}


var shortestDistance = function(words, word1, word2) {
  let hashMap = { `${word1}`: [], `${word2}`: [] };


  for (let i = 0; i < words.length; i++) {
    if (words[i] === `${word1}`) {
      hashMap[word1].push(i)
    } else if (words[i] === `${word2}`) {
      hashMap[word2].push(i);
    }
  }
  console.log(hashMap)

  let wordOneIndices = hashMap[word1];
  let wordTwoIndices = hashMap[word2];

  return findDifference(wordOneIndices, wordTwoIndices);
};

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], 'coding', 'practice'));


/*
Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
*/
