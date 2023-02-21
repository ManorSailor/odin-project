/**
 * Encrypts a string using the Caesar Cipher algorithm
 * @param {string} str
 * @param {number} key
 * @returns {string}
 */
export default function caesar(str, key = 0) {
  if (typeof str !== 'string') return str;
  return str
    .split('')
    .map((char) => encode(char.charCodeAt(), key))
    .join('');
}

function encode(charCode, key) {
  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(((charCode - 65 + key) % 26) + 65);
  } else if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(((charCode - 97 + key) % 26) + 97);
  } else {
    return String.fromCharCode(charCode);
  }
}
