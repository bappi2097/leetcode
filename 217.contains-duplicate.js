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
  for (let i in nums) {
    if (Number(i) + 1 <= nums.length && nums.includes(nums[i], Number(i) + 1)) {
      return true;
    }
  }
  return false;
};
// @lc code=end

console.log(containsDuplicate([2, 14, 18, 22, 22]));
