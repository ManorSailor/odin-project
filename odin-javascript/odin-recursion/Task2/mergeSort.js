/**
 * Merge sort implementation using 2-way merge method (Recursive)
 * @param {any[]} unsorted : An array of elements, length must be > 1
 * @returns {any[]} : In sorted (ascending) order. Note: Chars are sorted as per ASCII table
 */
function mergeSort(unsorted = []) {
  // An array of length 1 is already sorted
  if (unsorted.length <= 1) return unsorted;

  const leftHalf = unsorted.slice(0, unsorted.length / 2);
  const rightHalf = unsorted.slice(unsorted.length / 2);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

/**
 * Merge function which merges two sorted halves into one sorted array using 2-way merge method
 * @param {any[]} sortedLeft : Sorted left half of the array
 * @param {any[]} sortedRight : Sorted right half of the array
 * @returns {any[]} : Merged sorted array of the two halves
 */
function merge(sortedLeft, sortedRight) {
  const sorted = [];

  // Merge the two halves together by comparing each element from both halves
  while (sortedLeft.length && sortedRight.length) {
    const smallest = sortedLeft[0] < sortedRight[0] ? sortedLeft : sortedRight;
    sorted.push(smallest[0]);
    smallest.shift();
  }

  // Copy the remaining values from the two halves, return a new array with all sorted values
  return [...sorted, ...sortedLeft, ...sortedRight];
}

const evenUnsorted = [1, 3, 20, 17, 11, 6, 9, 14, 7, 5];
const oddUnsorted = [6, 18, 7, 9, 17, 3, 19, 12, 20, 8, 2];
const alphabetTest = ['E', 'm', 'I', 'N', 'f', 'K', 'S', 'q', 'A', 'C'];
const mixedTest = ['4', '^', '/', '6', '-', '>', '(', '>', '+', '3'];

console.log(mergeSort(evenUnsorted)); // -> [ 1, 3, 5, 6, 7, 9, 11, 14, 17, 20 ]
console.log(mergeSort(oddUnsorted));  // -> [ 2, 3, 6, 7, 8, 9, 12, 17, 18, 19, 20 ]
console.log(mergeSort(alphabetTest)); // -> [ "A", "C", "E", "I", "K", "N", "S", "f", "m", "q" ]
console.log(mergeSort(mixedTest));    // -> [ "(", "+", "-", "/", "3", "4", "6", ">", ">", "^" ]
