'use strict';

/**
 * Implement doubleTrouble function:
 *
 * Function takes an array of integers (array), and a target (target), you must
 * find out if any two consecutive numbers in the array sum to target. If so,
 * remove the second number. Work through the array from left to right.
 *
 * Example:
 *
 * const array = [1, 2, 3, 4, 5]
 * const array = [1, 3, 4, 5]
 * const target = 3
 *
 * 1+2 = target, so remove 2. No other pairs = target, so rest of array remains:
 *
 * [1, 3, 4, 5]
 *
 * Return the resulting array.
 *
 * @param {number[]} numbers
 * @param {number} target
 *
 * @return {number[]} - array of remained numbers
 */
function doubleTrouble(numbers, target) {
  const numbersCopy = [...numbers];
  let i = 0;
  while (i < numbersCopy.length - 1) {
    if (numbersCopy[i] + numbersCopy[i + 1] === target) {
      numbersCopy.splice(i + 1, 1);
      i--;
    }
    i++;
  }

  return numbersCopy;
}

module.exports = doubleTrouble;
