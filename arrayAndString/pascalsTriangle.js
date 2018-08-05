/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows || numRows < 1) {
    return [];
  }

  const pascal = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prev = pascal[pascal.length - 1];
    let left = [...prev, 0];
    let right = [0, ...prev];

    let current = left.map((el, i) => {
      return el + right[i];
    })

    pascal.push(current);
  }

  return pascal;

}
