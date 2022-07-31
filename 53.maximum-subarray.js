/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(sum, max);
  }
  return max;
};
// @lc code=end

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
