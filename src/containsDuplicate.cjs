/**
 * Contains Duplicate
 *
 * Problem Description:
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * @param {number[]} nums - Array of integers.
 * @return {boolean} - True if any value appears at least twice, otherwise false.
 */
function containsDuplicate(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}

module.exports = containsDuplicate;
