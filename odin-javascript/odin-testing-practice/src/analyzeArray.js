/**
 * Analyzes the given array of numbers
 * @param {number[]} arr
 * @returns {object}
 */
export default function analyzeArray(arr) {
  return {
    length: arr.length,
    average: Math.floor(arr.reduce((a, b) => a + b) / arr.length),
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
