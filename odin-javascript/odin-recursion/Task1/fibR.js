/**
 * Program to find the nth fibonacci number. (Recursive)
 * @param {int} nth : a number, must be > 0
 * @returns {int[]} : array of fibonacci upto nth
 */
function fibR(nth) {
  if (nth <= 0 || !Number.isInteger(nth)) return 'Must be greater than 0';
  else if (nth <= 2) return [0, 1].slice(0, nth);

  // To be able to calculate the nth fib, we need to calculate nth - 1 first
  const calculatedFibs = fibR(nth - 1);

  // When you've calculated all fibs excluding nth, then calculate the nth fib
  const lastFib = calculatedFibs.at(-2);
  const prevFib = calculatedFibs.at(-1);
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
 * - It has only a single base, the 1st case won't run during recursive calls
 * - It has only 1 Recursive step unlike unoptimized recursive fib solution which has 2
 * - Its recursive depth is n, recursive depth is the max number of calls from the initial call to the base case... I thought the conventional fib solution has a depth of 2n - 1? My maths is weaker than I thought ;__;
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
