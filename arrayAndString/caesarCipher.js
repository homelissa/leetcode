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
