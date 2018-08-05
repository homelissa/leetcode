/*
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

Array.prototype.merge = function(bucket) {
  bucket.forEach(element => {
    this.push(element)
  })

  return this;
}


var topKFrequent = function(nums, k) {
  let frequency = {};
  let buckets = [];
  let results = [];

  nums.forEach((num, idx) => {
    //iterate through the numbers array and create a frequency hashmap
    if (frequency[num] {
      frequency[num] = frequency[num] + 1
    } else {
      frequency[num] + 1
    }

    // initiate buckets with null values
    buckets[idx + 1] = null;
  })

  frequency.keys.forEach(key => {
    let count = frequency[key]
    if (!buckets[count]) { //if bucket doesn't exist, initialize the array with the value
      buckets[count] = key
    } else {
      buckets[count].push(key);
    }
  })


  //iterate from the end of the bucket and populate the results
  for (let i = buckets.length - 1; i > 0 && results.length < k; i--) {
    if (buckets[i] != null) {
      results.merge(buckets[i])
    }
  }

  return results.slice(0, k)

};


// alternate solution
var topKFrequent = (nums, k) => {
  const hash = {};
  nums.forEach(el => {
    hash[el] = hash[el] ? hash[el] += 1 : 1;
  })

  const sortedKeys = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

  return sortedKeys.splice(0, k).map(el => Number(el));
};


console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 4, 4], 2))
