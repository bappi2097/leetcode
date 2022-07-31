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
  const map = new Map();
  for (let i in nums) {
    if (i - map.get(nums[i]) <= k) return true;
    if (i > k) map.delete(nums[i - k + 1]);
    map.set(nums[i], i);
  }
  return false;
};
// @lc code=end
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
