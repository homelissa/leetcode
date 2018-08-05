Array.prototype.quickSort = function(cb) {
  if (this.length < 2) {
    return this;
  }

  if (!cb) {
    cb = function(x, y) {
      if (x < y) {
        return -1;
      } else {
        return 1;
      }
    };
  }

  const array = this.slice(0);
  const pivot = array[0];

  const leftSorted = array.slice(1).filter( (el) =>  {
    return (cb(el, pivot) === -1);
  }).quickSort(cb);

  const rightSorted = array.slice(1).filter( (el) => (cb(el, pivot)) !== -1).quickSort(cb);
  return leftSorted.concat([pivot]).concat(rightSorted);
};
