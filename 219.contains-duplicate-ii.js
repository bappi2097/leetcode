/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const tempObj = {};
  for (let i in nums) {
    if (nums[i] !== undefined && Math.abs(tempObj[nums[i]] - i) <= k) {
      return true;
    }
    tempObj[nums[i]] = i;
  }
  return false;
};
// @lc code=end
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
