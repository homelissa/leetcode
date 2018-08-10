var createhashMap = function(string) {
  let hashMap = {};

  string.split("").forEach(el => {
      hashMap[el] = hashMap[el] ? hashMap[el] += 1 : 1;
  }) 

  return hashMap;
}

var isAnagram = function(s, t) {
  let shorterWord = s.length < t.length ? s : t
  let longerWord = s === shorterWord ? t : s

  let hashMap = createhashMap(shorterWord);
  let hashMap2 = createhashMap(longerWord);

  const longerKeys = Object.keys(hashMap2);

  for (let i = 0; i < longerKeys.length; i++) {
    let el = longerKeys[i];
    if (hashMap[el] === undefined || hashMap[el] < hashMap2[el]) {
      return false;
    }
  }

  return true;
};



var isAnagram = function(s, t) {
  let shorterWord = s.length < t.length ? s : t
  let longerWord = s === shorterWord ? t : s

  for (let i = 0; i < longerWord.length; i++) {

    if (!shorterWord.includes(longerWord[i])) {
      return false;
    } else {
      let index = shorterWord.indexOf(longerWord[i]);
      shorterWord = shorterWord.slice(0, index) + shorterWord.slice(index + 1);
    }
  }

  return true;
};
