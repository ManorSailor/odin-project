/**
 * Reverses a passed string
 * @param {string} str 
 * @returns {string}
 */
export default function reverseString(str) {
    if (typeof str !== 'string') return str;
    return str.split('').reverse().join('');
}