var spiralOrder = function(matrix) {
    let result = [];

    if (matrix.length === 0) {
      return result;
    }

    let colBegin = 0;
    let colEnd = matrix[0].length -1;
    let rowBegin = 0;
    let rowEnd = matrix.length-1;

    while (colBegin <= colEnd && rowBegin <= rowEnd) {

      for (let i = colBegin; i <= colEnd; i++) {
        result.push(matrix[rowBegin][i]);
      }
      rowBegin++;

      for (let i = rowBegin; i <= rowEnd; i++) {
        result.push(matrix[i][colEnd]);
      }
      colEnd--;

      if (rowBegin <= rowEnd) {
        for (let i = colEnd; i >= colBegin; i--) {
          result.push(matrix[rowEnd][i])
        }
      }

      rowEnd--;

      if (colBegin <= colEnd) {
        for (let i = rowEnd; i >= rowBegin; i--) {
          result.push(matrix[i][colBegin]);
        }
      }

      colBegin++;
    }

    return result;
};

console.log(spiralOrder([
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]));


// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
