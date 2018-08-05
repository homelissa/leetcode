var transpose = (arr) => {
  let transposed = [];

  for (col = 0; col < arr[0].length; col++) {
    let temp = [];
    for (row = 0; row < arr.length; row++) {
      temp.push(arr[row][col]);
    }

    transposed.push(temp);
  }

  return transposed;
}
