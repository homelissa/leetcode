var caesarCipher = (str, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  str = str.split("");

  str.forEach((el, i) => {
    if (el === " ") {
      str[i] = el;
    } else {
      let oldIndex = alphabet.indexOf(el);
      let newIndex = (oldIndex + shift) % alphabet.length;
      str[i] = alphabet[newIndex];
    }
  })

  return str.join("");

}

const caesarCipher = (str, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  var ciphered = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      ciphered.push(" ");
      continue;
    }

    let oldIndex = alphabet.indexOf(str[i]);
    let newIndex = (oldIndex + shift) % alphabet.length;
    let nextLetter = alphabet[newIndex];
    ciphered.push(nextLetter);
  }

  return ciphered.join("");
}
