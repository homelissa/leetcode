// Monkey Patch
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


// function style
var bubbleSort = (arr, cb) => {
  if (!cb) {
    cb = (x, y) => (x <= y ? -1 : 1)
  }

  sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let next = arr[i + 1];

      if (i === arr.length - 1) {
        continue;
      }

      if (cb(current, next) === 1) {
        arr[i + 1] = current;
        arr[i] = next;
        sorted = false;
      }
    }
  }

  return arr;
}
