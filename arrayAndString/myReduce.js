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
