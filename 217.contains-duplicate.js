/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const distinct = new Set();
  for (let value of nums) {
    if (distinct.has(value)) {
      return true;
    }
    distinct.add(value);
  }
  return false;
};
// @lc code=end

console.log(containsDuplicate([2, 14, 18, 22]));
