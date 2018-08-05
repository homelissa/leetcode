const isPalindrome = string => {
  return string === string.split("").reverse().join("");
}

String.prototype.symmetricSubstrings = () => {
  let subs = [];

  for (let i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      let sub = this.slice(i, j + 1);
      if (isPalindrome(sub) && sub.length > 1) {
        if (!subs.includes(sub)) {
          subs.push(sub);
        }
      }
    }
  }

  return subs;
}
