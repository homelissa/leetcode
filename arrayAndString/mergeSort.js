Array.prototype.mergeSort = function(cb) {
  const array = this.slice(0);

  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const mergedLeft = array.slice(0, mid).mergeSort(cb);
  const mergedRight = array.slice(mid).mergeSort(cb);

  return mergedLeft.merge(mergedRight, cb);

}


Array.prototype.merge = function (arr, cb) {
  if (!cb) {
    cb = function(left, right) {
      if (left < right) {
        return -1;
      } else if (left > right) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  let merged = [];

  while (this.length && arr.length) {
    switch(cb(this[0], arr[0])) {
      case -1:
        merged.push(this.shift());
        break
      case 0:
        merged.push(this.shift());
        break
      case 1:
        merged.push(arr.shift());
        break
    }
  }

  merged = merged.concat(this);
  merged = merged.concat(arr);

  return merged;

}
