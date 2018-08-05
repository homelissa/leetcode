function myBsearch(array, target) {
  if (array.length < 1) {
    return -1;
  }

  const mid = Math.floor(array.length / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    let left = array.slice(0, mid);
    return myBsearch(left, target);
  } else {
    let result = myBsearch((array.slice(mid + 1, array.length)), target);
    return result === -1 ? -1 : result + mid + 1
  }
}

console.log(myBsearch([1,2,3,4,5], 2)); // 1
console.log(myBsearch([1,2,3,4,5], 5)); // 4
console.log(myBsearch([1,2,3,4,5], 6)); // -1
