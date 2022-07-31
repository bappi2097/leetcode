/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const tempNum = {};
  for (let i = 0; i < nums.length; i++) {
    if (tempNum[nums[i]] !== undefined) {
      return [tempNum[nums[i]], i];
    }
    tempNum[target - nums[i]] = i;
  }
};
// @lc code=end
