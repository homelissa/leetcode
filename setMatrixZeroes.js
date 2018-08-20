/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
*/

var changeToZero = function(matrix, row, col) {
  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
    return;
  }

  matrix[row][col] = 0;

  changeToZero(matrix, row + 1, col);
  changeToZero(matrix, row - 1, col);
  changeToZero(matrix, row, col + 1);
  changeToZero(matrix, row, col - 1);
}

var setZeroes = function(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        changeToZero(matrix, row, col);
      }
    }
  }

  return matrix;
};


















//
