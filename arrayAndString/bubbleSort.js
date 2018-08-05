Array.prototype.bubbleSort = function(cb) {
  if (!cb) {
    cb = function(x, y) {
      if (x <= y) {
        return -1;
      } else {
        return 1;
      }
    }
  }

  let bubble = this.slice(0);
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (var i = 0; i < bubble.length; i++) {
      let current = bubble[i];
      let next = bubble[i + 1];

      if (i === bubble.length - 1) {
        continue;
      }

      if (cb(current, next) === 1) {
        sorted = false;
        bubble[i + 1] = current;
        bubble[i] = next;
      }
    }
  }

  return bubble;
}
