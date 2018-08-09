var isPalindrome = function(s) {
  let letterNumber = /^[0-9a-zA-Z]+$/;
  s = s.toLowerCase();

  if (s.length === 0) {
    return true;
  }

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!s[start].match(letterNumber)) {
      start++;
      continue;
    }

    if (!s[end].match(letterNumber)) {
      end--;
      continue;
    }


    if (s[start] !== s[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};
