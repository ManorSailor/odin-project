/**
 * Program to find the nth fibonacci number. (Recursive)
 * @param {int} nth : a number, must be > 0
 * @returns {int[]} : array of fibonacci upto nth
 */
function fibR(nth) {
  if (nth <= 0 || !Number.isInteger(nth)) return 'Must be greater than 0';
  else if (nth === 1) return [0];
  else if (nth === 2) return [0, 1];

  // To be able to calculate the nth fib, we need to calculate nth - 1 first
  const calculatedFibs = fibR(nth - 1);

  // When you've calculated all fibs excluding nth, then calculate the nth fib
  const lastFib = calculatedFibs[calculatedFibs.length - 2];
  const prevFib = calculatedFibs[calculatedFibs.length - 1];
  const nextFib = prevFib + lastFib;

  return [...calculatedFibs, nextFib];
}

console.log(fibR());   // -> Must be greater than 0
console.log(fibR(0));  // -> Must be greater than 0
console.log(fibR('')); // -> Must be greater than 0
console.log(fibR(1));  // -> [0]
console.log(fibR(2));  // -> [0, 1]
console.log(fibR(3));  // -> [0, 1, 1]
console.log(fibR(4));  // -> [0, 1, 1, 2]
console.log(fibR(8));  // -> [0, 1, 1, 2, 3, 5, 8, 13]

/**
 * Some facts about function above
 * - It has 3 Base cases, aka multiple base cases
 * - It has only 1 Recursive step unlike unoptimized recursive fib solution which has 2
 * - Its recursive depth is n unlike unoptimized recursive fib solution whose depth is 3n/2 (if my math is correct)
 */

// Plz ignore this abomination. It works, but its cursed.
// function fibRR(nth) {
//   return nth <= 0
//     ? 'Enter a number greater than 0'
//     : nth === 1
//     ? [0]
//     : nth === 2
//     ? [0, 1]
//     : [
//         ...fibRR(nth - 1),
//         fibRR(nth - 1)[fibRR(nth - 1).length - 1] +
//           fibRR(nth - 1)[fibRR(nth - 1).length - 2],
//       ];
// }
// console.log(fibRR(8));