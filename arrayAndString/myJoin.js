var myJoin = (array, separator) => {
  let newStr = ""

  for (let i = 0; i < array.length; i++) {
    newStr += array[i];
    if (i != array.length - 1) {
      newStr += separator;
    }
  }

  return newStr;
}
