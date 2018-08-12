var isPowerOfThree = function(n) {
  if (n === 0) {
      return false;
  }

  if (n === 1 || n === 3) {
      return true;
  }

  let div = n / 3;

  if (Number.isInteger(div)) {
      return isPowerOfThree(div);
  }

  return false;

};
