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

// * Character codes:
// * A => 65; M => 77; N => 78; Z => 90; " " => 32;

// TODO:
// - Write a helper function to convert a single letter using ROT13.
// - Iterate through the chars in the input string,
//   convert each alphabetic char and skip over any other char.

// * Helper function to convert a single letter using ROT13.
function convertLetter(letter) {
  const charCode = letter.charCodeAt(0);
  if (charCode >= 65 && charCode <= 77) {
    return String.fromCharCode(charCode + 13);
  }
  if (charCode >= 78 && charCode <= 90) {
    return String.fromCharCode(charCode - 13);
  }
  // return the starting value if it's not a capital letter.
  return letter;
}

function rot13(str) {
  return str
    .split("")
    .map((char) => convertLetter(char))
    .join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
