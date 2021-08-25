// * Instructions:
// * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// * With the ROT13 cipher, the values of the letters are shifted by 13 places.
// * Thus A ↔ N, B ↔ O and so on.
// * All letters will be uppercase.
// * Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Thoughts:
// - Use character codes.
// - If a given letter is between A and M
//   then add 13 to the character code and convert to a letter.
// - If a given letter is between N and Z
//   then subtract 13 from the character code and convert to a letter.
// - Might be helpful to have a helper to check for non-alphabetic characters.

// TODO:
// Write a helper function to convert a single letter using ROT13.
// Iterate through the chars in the input string,
// convert each alphabetic char and skip over any other char.

function rot13(str) {
  return str;
}

console.log(rot13("SERR PBQR PNZC"));
