var reverseArrayInPlace = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let front = 0;
  let back = arr.length - 1;

  while (front < back) {
    swap(arr, front, back);
    front++;
    back--;
  }

  return arr;
}


var swap = (arr, front, back) => {
  let temp = arr[front];
  arr[front] = arr[back];
  arr[back] = temp;
  return arr;
}
