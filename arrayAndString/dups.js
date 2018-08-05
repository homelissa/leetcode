var duplicates = (arr) => {
  let counts = {};
  let dups = {};

  arr.forEach((el, i) => {
    counts[el] = counts[el] || [];
    return counts[el].push(i);
  })

  let keys = Object.keys(counts).filter(el => counts[el].length > 1);

  keys.forEach((el) => {
    return dups[el] = counts[el];
  })

  return dups;
}

console.log(duplicates([1, 3, 4, 3, 0, 3, 0])); // { 0: [ 4, 6 ], 3: [ 1, 3, 5 ] }
