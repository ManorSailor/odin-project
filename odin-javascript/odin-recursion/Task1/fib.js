/**
 * Program to find the nth fibonacci number. (Iterative)
 * @param {int} nth : a number, must be > 0
 * @returns {int[]} : array of fibonacci upto nth
 */
function fib(nth) {
  if (nth <= 0 || !Number.isInteger(nth)) return 'Must be greater than 0';
  else if (nth <= 2) return [0, 1].slice(0, nth);
  
  const fibs = [0, 1];
  
  // We already have first 2 fibs, hence, we start from 3
  for (let i = 3; i <= nth; i++) {
    const lastFib = fibs.at(-2);
    const prevFib = fibs.at(-1);
    const nextFib = prevFib + lastFib;
    fibs.push(nextFib);
  }

  return fibs;
}

console.log(fib());   // -> Must be greater than 0
console.log(fib(0));  // -> Must be greater than 0
console.log(fib('')); // -> Must be greater than 0
console.log(fib(1));  // -> [0]
console.log(fib(2));  // -> [0, 1]
console.log(fib(3));  // -> [0, 1, 1]
console.log(fib(4));  // -> [0, 1, 1, 2]
console.log(fib(8));  // -> [0, 1, 1, 2, 3, 5, 8, 13]
