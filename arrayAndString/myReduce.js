Array.prototype.myReduce = function (cb, acc) {
  const array = this.slice(0);

  if (!acc) {
    acc = array.shift();
  }

  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i])
  }

  return acc;

}


var myReduce = (arr, cb, acc) => {
  if (!acc) {
    acc = arr.shift();
  }

  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }

  return acc;
}

var getSum = (nums) => {
  const reducer = (acc, current) => acc + current;
  return myReduce(nums, reducer);
}
